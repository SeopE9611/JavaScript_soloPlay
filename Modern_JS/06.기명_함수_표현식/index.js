/*
const sayHi = function () {
  console.log("Hi");
};

console.log(sayHi.name); // sayHi
*/

/*
const sayHi = function printHiInConsole() {
  console.log("Hi");
};

console.log(sayHi.name); // printHiInConsole
*/

/*
const sayHi = function printHiInConsole() {
  console.log("Hi");
};

printHiInConsole(); // ReferenceError
*/

/*
let countdown = function (n) {
  console.log(n);
 
  if (n === 0) {
    console.log("End!");
  } else {
    countdown(n - 1);
  }
};

countdown(5);
*/

let countdown = function (n) {
  console.log(n);
  if (n === 0) {
    console.log("End!");
  } else {
    countdown(n - 1);
  }
};

let myFunction = countdown;

countdown = null;

myFunction(5); // TypeError
