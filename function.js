function show(){
  console.log('Hello!');
}
show();

function showMessage(from, text){
  console.log(`${from}:${text}`);
}
showMessage('An', 'Hello!');
showMessage('An', "What's up ?");

function sum(a,b){
  return a+b;
}
let result = sum(5,2);
console.log(result);

function showMovie(age){
  if (age < 18){
    return;
  }
  console.log("Show movie");
}
showMovie(50);

function doNoting(){
  return
}
console.log(doNoting())


let sayHi = function(){
  console.log("Hello");
}
console.log(sayHi())