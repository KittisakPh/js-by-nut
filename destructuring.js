let arr = ["Ilya", "Kantor"]
let [firstName, lastName] = arr
console.log(firstName, lastName)

let users = {
  fName: "Kittisak",
  lName: "Phatchaiphongsa"
}
let {fName, lName, mName} = users
console.log(fName, lName)

let profile = {
  firstN: "Kittisak",
  lastN: "Phatchaiphongsa"
}
let {firstN: f, lastN: l} = profile
console.log(f, l, firstN, lastN)