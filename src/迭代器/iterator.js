let i = 0
const myIterator = {
  next() {
    if (i < 5) {
      i++
      return { value: i, done: false }
    } else {
      return { value: undefined, done: true }
    }
  },
  return(c) {
    console.log(c)
    return { done: true }
  },
  [Symbol.iterator]() {
    return this
  },
}
for (let item of myIterator) {
  if (item === 4) break
  console.log(item)
}
