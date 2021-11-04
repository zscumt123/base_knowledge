type Test = Iterable<String>

let s: Generator
let f = s[Symbol.iterator]()
interface T extends Iterable<string> {
  a: () => void
  b(): void
}
let t: T
let s = new Uint8Array()
