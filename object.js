let user = {
  name: 'Johb',
  age: 30,
  sizes: {
    height: 180,
    width: 65,
  }
}
console.log(user)
console.log(user.age)
user.height = 180
console.log(user)
user.isSingle = true;
console.log(user["name"])
console.log(user["age"])
console.log(user["height"])
user["computer skill"] = "Go"
console.log(user["computer skill"])
console.log(user.sizes.height)
console.log(user["sizes"]["height"])