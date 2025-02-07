let fruits = ["Banana", "Pineapple","Orange", "Plum"];
console.log(fruits[0])
console.log(fruits[1])
console.log(fruits[2])
console.log(fruits[3])

fruits[3] = "Guava";
console.log(fruits[3])

fruits.push("A");
console.log(fruits)
fruits.unshift("Berry")
console.log(fruits)

fruits.pop("Pineapple");
console.log(fruits)
fruits.shift()
console.log(fruits)

let arr = ["Apple", "Orange", "Pear"];
for (let i=0; i<arr.length; i++){
  console.log(arr[i])
}

for (const item of arr){
  console.log(item)
}

for (const index in arr){
  console.log(arr[index])
}