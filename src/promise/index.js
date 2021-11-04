const STATUS = {
  pending: 0,
  fulfilled: 1,
  rejected: 2,
}
function circlyError() {
  return TypeError('Chaining cycle detected for promise #<Promise>')
}
function noop() {}
const isFunction = (fn) => typeof fn === 'function'
const isThenable = (val) => val !== null && typeof val === 'object' && isFunction(val.then)
const isPending = (promise) => promise.status === STATUS.pending
const isIterator = (iterator) =>
  iterator !== null && typeof iterator[Symbol.iterator] === 'function'
//队列
const queue = []
let flushing = false
function insert(fn) {
  queue.push(fn)
  if (!flushing) {
    flushing = true
    queueMicrotask(flush)
  }
}
function flush() {
  flushing = false
  const cbs = queue.slice(0)
  queue.length = 0
  for (let cb of cbs) {
    cb()
  }
}

function trigger(promise) {
  const { callbacks, status, result } = promise
  for (let i = 0; i < callbacks.length; i++) {
    const child = callbacks[i].child
    const cb = callbacks[i][status]
    if (child) {
      invokeCb(child, cb, status, result)
    } else {
      cb(result)
    }
  }
}
function invokeCb(childPromise, cb, status, result) {
  //处理child promise
  const hasCb = isFunction(cb)
  let value,
    successed = true
  if (hasCb) {
    try {
      value = cb(result)
    } catch (error) {
      successed = false
      value = error
    }
    if (value === childPromise) {
      reject(childPromise, circlyError())
      return
    }
  } else {
    value = result
  }
  // console.log(value)
  //不能多次resolve
  if (!isPending(childPromise)) return
  //成功执行then里面的函数
  if (hasCb && successed) {
    resolve(childPromise, value)
  } else if (!successed) {
    reject(childPromise, value)
  } else if (status === STATUS.fulfilled) {
    fulfill(childPromise, value)
  } else if (status === STATUS.rejected) {
    reject(childPromise, value)
  }
}
function subscribe(promise, child, onFulfilled, onRejected) {
  const { callbacks } = promise
  callbacks.push({
    child,
    [STATUS.fulfilled]: onFulfilled,
    [STATUS.rejected]: onRejected,
  })
}

function handleThenable(promise, thenable) {
  //真正的then
  if (promise.constructor === thenable.constructor) {
    if (thenable.status === STATUS.fulfilled) {
      resolve(promise, thenable.result)
    } else if (thenable.status === STATUS.rejected) {
      reject(promise, thenable.result)
    } else {
      subscribe(
        thenable,
        undefined,
        (val) => resolve(promise, val),
        (reason) => reject(promise, reason)
      )
    }
  } else {
    insert(() => execThenableFn(promise, thenable))
  }
}
function execThenableFn(promise, thenable) {
  try {
    thenable.then(
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

//promise resolve 置值器
function resolve(promise, value) {
  //循环依赖
  if (promise === value) {
    reject(promise, circlyError())
  } else if (isThenable(value)) {
    //thenable
    handleThenable(promise, value)
  } else {
    fulfill(promise, value)
  }
}
function fulfill(promise, value) {
  if (!isPending(promise)) return
  promise.status = STATUS.fulfilled
  promise.result = value
  insert(() => trigger(promise))
}
function reject(promise, reason) {
  if (!isPending(promise)) return
  promise.status = STATUS.rejected
  promise.result = reason
  insert(() => trigger(promise))
}

class MyPromise {
  constructor(executor) {
    this.status = STATUS.pending
    this.result = undefined
    this.callbacks = []
    //校验
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
  then(onFulfilled, onRejected) {
    const child = new this.constructor(noop)
    if (!isPending(this)) {
      const cb = this.status === STATUS.fulfilled ? onFulfilled : onRejected
      insert(() => invokeCb(child, cb, this.status, this.result))
    } else {
      subscribe(this, child, onFulfilled, onRejected)
    }
    return child
  }
  catch(onRejected) {
    this.then(null, onRejected)
  }
  finally(cb) {
    const Constructor = this.constructor
    if (isFunction(cb)) {
      return this.then(
        (value) => Constructor.resolve(cb()).then(() => value),
        (reason) =>
          Constructor.resolve(cb()).catch(() => {
            throw reason
          })
      )
    } else {
      this.then(cb, cb)
    }
  }
  static allSettled(iterator) {
    const Constructor = this
    if (!isIterator(iterator)) {
      return new Constructor((_, reject) =>
        reject(
          TypeError(`${iterator} is not iterable (cannot read property Symbol(Symbol.iterator))`)
        )
      )
    } else {
      return new Constructor((resolve, reject) => {
        const entries = Array.from(iterator)
        const len = entries.length
        const result = new Array(len)
        let counter = 0
        for (let i = 0; i < len; i++) {
          Constructor.resolve(entries[i]).then(
            (value) => {
              counter++
              result[i] = { status: 'fulfilled', value }
              if (counter === len) {
                resolve(result)
              }
            },
            (reason) => {
              counter++
              result[i] = { status: 'rejected', reason }
              if (counter === len) {
                resolve(result)
              }
            }
          )
        }
      })
    }
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
  static reject(reason) {
    const Constructor = this
    const promise = new Constructor(noop)
    reject(promise, reason)
    return promise
  }
  static all(iterator) {
    const Constructor = this
    if (!isIterator(iterator)) {
      return new Constructor((_, reject) =>
        reject(
          TypeError(`${iterator} is not iterable (cannot read property Symbol(Symbol.iterator))`)
        )
      )
    } else {
      const entries = Array.from(iterator)
      return new Constructor((resolve, reject) => {
        const len = entries.length
        let result = new Array(len)
        let counter = 0
        if (len == 0) {
          resolve(result)
          return
        }
        for (let i = 0; i < len; i++) {
          Constructor.resolve(entries[i])
            .then((res) => {
              counter++
              result[i] = res
              if (counter === len) resolve(result)
            })
            .catch(reject)
        }
      })
    }
  }
  static race(iterator) {
    const Constructor = this
    if (!isIterator(iterator)) {
      return new Constructor((_, reject) =>
        reject(
          TypeError(`${iterator} is not iterable (cannot read property Symbol(Symbol.iterator))`)
        )
      )
    } else {
      return new Constructor((resolve, reject) => {
        for (let item of iterator) {
          Constructor.resolve(item).then(resolve, reject)
        }
      })
    }
  }
}
const p = new MyPromise((resolve) => {
  setTimeout(() => {
    resolve(1000)
  }, 2000)
})
const p1 = new MyPromise((resolve, reject) => {
  reject(299)
})
MyPromise.allSettled([p, p1]).then((res) => {
  console.log(res)
})

// const p2 = MyPromise.resolve(p1)
// p2.then((res) => {
//   console.log(res)
// }).catch((reason) => {
//   console.log(reason)
// })
