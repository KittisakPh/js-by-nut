const fruits = ["Apple", "Samsung", "Xiami"]
fruits.push("A")
fruits.pop()
fruits.unshift("B")
fruits.shift()
let arr = [1,2];
console.log(arr.concat([3,4], [5,6], 7, 8))

const numbers = [1,2,3,4,5,6];
const target = numbers.find(e => e%3 === 0);
console.log(target)

const objs = [
  {name:"John", age:30},
  {name:"Barry", age:26},
  {name:"Allen", age:24},
]

const t = objs.find(e => e.age === 30)
console.log(t)

const ids = [1,2,3,4,5,6,7,8]
const idsFilter = ids.filter(e => e%2 === 0)
console.log(idsFilter)

const users = [
  {id: 1, name: "John", age:17},
  {id: 2, name: "John", age:18},
  {id: 3, name: "John", age:18},
  {id: 4, name: "John", age:17},
]
const filters = users.filter(e => e.age === 18)
console.log(filters)


let accounts = [
  {id: 1, name: "John", age: 17},
  {id: 2, name: "Pete", age: 18},
  {id: 3, name: "Mary", age: 18},
  {id: 4, name: "Sara", age: 17},
]

const result = accounts.map(e => e.id)
console.log(result)