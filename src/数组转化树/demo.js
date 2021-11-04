const arr = [
  {
    name: '小明',
    id: 1,
    pid: 0,
  },
  {
    name: '小花',
    id: 11,
    pid: 1,
  },
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
  {
    name: '小红',
    id: 12,
    pid: 1,
  },
  {
    name: '小王',
    id: 2,
    pid: 0,
  },
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
]
/**
 *
 * @param {array<{name:string ,id: number, pid:number}>} arr
 */
function array2Tree(arr, pid) {
  if (!Array.isArray(arr) || !arr.length) return []
  let res = []
  arr.forEach((val) => {
    if (val.pid === pid) {
      let itemChildren = array2Tree(arr, val.id)
      if (itemChildren) {
        val.children = itemChildren
      }
      res.push(val)
    }
  })
  return res
}

function array2Tree2(arr) {
  if (!Array.isArray(arr) || !arr.length) return []
  let result = []
  let map = {}
  arr.forEach((val) => (map[val.id] = val))
  arr.forEach((val) => {
    let parent = map[val.pid]
    if (parent) {
      if (!parent.children) parent.children = []
      parent.children.push(val)
    } else {
      result.push(val)
    }
  })
  return result
}
