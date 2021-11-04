function* makeRangeIerator(start = 0, end = Infinity, step = 1) {
  for (let i = start; i < end; i += step) {
    yield i
  }
}
// console.dir(makeRangeIerator)
// const c = makeRangeIerator(1, 10, 2)
// console.dir(c[Symbol.iterator]() === c)
// for (let item of c) {
//   console.log(item)
// }
// const myIterator = {
//   *[Symbol.iterator]() {
//     console.log('a' + (yield 0))
//     yield 1
//     yield* [5, 4, 6]
//     yield 2
//     return 3
//   },
// }
// for (let item of myIterator) {
//   console.log(item)
// }

// function* numConsole() {
//   console.log('start')
//   console.log(`first:${yield}`)
//   console.log(`second: ${yield}`)
//   console.log('end')
// }
// let a = numConsole()
// a.next()
// a.next(1)
// a.next(2)
// let s = a.next()
// console.log(s)

// function* fibonacci() {
//   let prev = 0,
//     current = 1
//   while (true) {
//     yield current
//     ;[prev, current] = [current, prev + current]
//   }
// }
// for (let k of fibonacci()) {
//   if (k > 1000) break
//   console.log(k)
// }

// function* gen() {
//   try {
//     console.log('start')
//     yield 1
//     console.log('1')
//     yield 2
//     console.log('2')
//     yield 3
//     console.log('3')
//   } catch (error) {
//     console.log('err')
//   }
// }
// const a = gen()
// a.next()
// a.throw()
// a.next()
// a.next()

// function* foo() {
//   yield 'a'
//   yield 'b'
//   return 'c'
// }

// function* bar() {
//   yield 'x'
//   // 手动遍历 foo()
//   const val = yield* foo()
//   yield val
//   yield 'y'
// }

// let a = bar()
// document.body.addEventListener('click', function () {
//   console.log('click')
//   a.next()
// })

function p1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('a.txt')
    }, 1000)
  })
}

function p2() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('b.txt')
    }, 2000)
  })
}
function* gen() {
  let f1 = yield p1()
  console.log(f1)
  let f2 = yield p2()
  console.log(f2)
}
var g = gen()
g.next().value.then((res) => {
  g.next(res).value.then((res) => {
    g.next(res)
  })
})

function co(gen) {
  const ctx = this
  return new Promise((resolve, reject) => {
    if (typeof gen === 'function') gen = gen.call(ctx)
    if (!gen || typeof gen.next !== 'function') return resolve(gen)
    onFulfilled()
    function onFulfilled(res) {
      let ret
      try {
        ret = gen.next(res)
      } catch (error) {
        return reject(error)
      }
      next(ret)
    }
    function next(ret) {
      if (ret.done) return resolve(ret.value)
      const value = Promise.resolve(ret.value)
      return value.then(onFulfilled)
    }
  })
}
