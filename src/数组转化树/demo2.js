/**
 *
 * @param {Array<any>} arr
 */
function tree2Array(arr) {
  if (!Array.isArray(arr) || !arr.length) return []
  let res = []
  arr.forEach((item) => {
    const { children, ...other } = item
    res.push(other)
    if (children && children.length) {
      res.push(...tree2Array(children))
    }
  })
  return res
}

function tree2Array2(arr) {
  if (!Array.isArray(arr) || !arr.length) return []
  let res = []
  let stack = [...arr]
  while (stack.length) {
    let { children, ...other } = stack.pop()
    res.push(other)
    if (children && children.length) {
      stack.push(...children)
    }
  }
  return res
}
const tree = [
  {
    name: '小明',
    id: 1,
    pid: 0,
    children: [
      {
        name: '小花',
        id: 11,
        pid: 1,
        children: [
          {
            name: '小华',
            id: 111,
            pid: 11,
          },
          {
            name: '小李',
            id: 112,
            pid: 11,
          },
        ],
      },
      {
        name: '小红',
        id: 12,
        pid: 1,
      },
    ],
  },
  {
    name: '小王',
    id: 2,
    pid: 0,
    children: [
      {
        name: '小林',
        id: 21,
        pid: 2,
      },
      {
        name: '小李',
        id: 22,
        pid: 2,
      },
    ],
  },
]
console.log(tree2Array2(tree))
