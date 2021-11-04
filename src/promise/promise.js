//utils
const STATUS = {
  pending: 0,
  fulfilled: 1,
  rejected: 2,
}
const isFunction = (fn) => typeof fn === 'function'
const isThenable = (obj) =>
  obj !== null && typeof obj === 'object' && typeof obj.then === 'function'
const noop = function () {}

//queqe
const cbQueue = []
let flushing = false
function insert(fn) {
  cbQueue.push(fn)
  if (!flushing) {
    flushing = true
    queueMicrotask(flush)
  }
}
function flush() {
  flushing = false
  const copy = cbQueue.slice(0)
  cbQueue.length = 0
  for (let fn of copy) {
    fn()
  }
}
function handleThenable(promsie, thenable) {
  //真的thenable对象
  if (promsie.constructor === thenable.constructor) {
    const { status, result } = thenable
    if (status === STATUS.fulfilled) {
      resolve(promsie, result)
    } else if (status === STATUS.rejected) {
      reject(promsie, result)
    } else {
      subscribe(
        thenable,
        undefined,
        (val) => resolve(promsie, val),
        (err) => reject(promsie, err)
      )
    }
  } else {
    insert(() => callThenFn(promsie, thenable))
  }
}
function callThenFn(promise, thenable) {
  try {
    thenable.then.call(
      thenable,
      (val) => {
        resolve(promise, val)
      },
      (reason) => {
        reject(promise, reason)
      }
    )
  } catch (error) {
    reject(promise, error)
  }
}
function resolve(promise, val) {
  //循环引用
  if (promise === val) {
    reject(promise, TypeError('Chaining cycle detected for promise #<Promise>'))
  } else if (isThenable(val)) {
    handleThenable(promise, val)
  } else {
    fulfill(promise, val)
  }
}
function fulfill(promise, val) {
  if (promise.status !== STATUS.pending) return
  promise.status = STATUS.fulfilled
  promise.result = val
  insert(() => trigger(promise))
}
function reject(promise, reason) {
  if (promise.status !== STATUS.pending) return
  promise.status = STATUS.rejected
  promise.result = reason
  insert(() => trigger(promise))
}
function subscribe(promise, child, onFulfiiled, onRejected) {
  const { callbacks } = promise
  callbacks.push({
    child,
    [STATUS.fulfilled]: onFulfiiled,
    [STATUS.rejected]: onRejected,
  })
}

function invokeCb(promise, cb, parentStatus, parentResult) {
  let value,
    successed = true,
    isFn = isFunction(cb)
  if (isFn) {
    try {
      value = cb(parentResult)
    } catch (error) {
      successed = false
      value = error
    }
    //返回的结果是自身
    if (promise === value) {
      reject(promise, TypeError('Chaining cycle detected for promise #<Promise>'))
      return
    }
  } else {
    value = parentResult
  }
  if (promise.status !== STATUS.pending) return
  //有回调，执行成功了
  if (isFn && successed) {
    resolve(promise, value)
    //没执行成功
  } else if (!successed) {
    reject(promise, value)
    //没有回调，就传递
  } else if (parentStatus === STATUS.fulfilled) {
    fulfill(promise, value)
  } else if (parentStatus === STATUS.rejected) {
    reject(promise, value)
  }
}
function trigger(promise) {
  const { callbacks, status, result } = promise
  for (let i = 0; i < callbacks.length; i++) {
    const child = callbacks[i].child
    const fn = callbacks[i][status]
    if (child) {
      invokeCb(child, fn, status, result)
    } else {
      fn(result)
    }
  }
}

class MyPromise {
  constructor(executor) {
    this.status = STATUS.pending
    this.result = undefined
    this.callbacks = []
    if (!isFunction(executor)) {
      throw TypeError(` Promise resolver ${executor} is not a function`)
    }
    if (!(this instanceof MyPromise)) {
      throw TypeError('must be use new operator')
    }
    if (executor !== noop) {
      try {
        executor(
          (val) => resolve(this, val),
          (reason) => reject(this, reason)
        )
      } catch (error) {
        reject(this, error)
      }
    }
  }
  then(onFulfiiled, onRejected) {
    const child = new MyPromise(noop)
    if (this.status === STATUS.pending) {
      //订阅
      subscribe(this, child, onFulfiiled, onRejected)
    } else {
      const cb = this.status === STATUS.fulfilled ? onFulfiiled : onRejected
      insert(() => invokeCb(child, cb, this.status, this.result))
    }
    return child
  }
  static resolve(val) {
    const Constructor = this
    if (typeof val === 'object' && val.constructor === Constructor) {
      return val
    }
    const promise = new Constructor(noop)
    resolve(promise, val)
    return promise
  }
  static reject(val) {
    const Constructor = this
    const promise = new Constructor(noop)
    reject(promise, val)
    return promise
  }
}

const p = new MyPromise((resolve) => {
  resolve('abc')
})
p.then((res) => {
  console.log(res)
  return '1'
}).then((res) => {
  console.log(res)
})
