let arr = [3,5,1];
let arr2 = [8,9,15];
let merged = [0, ...arr, 2, ...arr2]
console.log(merged)

const user = {
  name: "Sonter",
  age: 18,
}

const details = {
  // name: "d",
  skill: "React",
  language: "JavaScript"
}

const instructor = {age: 16,...user ,...details, age:18}

console.log(instructor)