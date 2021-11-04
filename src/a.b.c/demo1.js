/**
 * a.b.c => {a: {b: c}}
 * @param {string} s
 */
function covert(s) {
  let arr = s.split('.')
  let result = {}
  let obj = result

  for (let i = 0; i < arr.length; i++) {
    let current = arr[i]
    obj = obj[current] = {}
  }
  return result
}
