/*
const printJS = function () {
  console.log("JavaScript");
};

printJS();
*/

/*
console.log("-------------------------------");
console.dir(0); // 0
console.dir("SeopE"); // SeopE
console.dir(true); // true
console.dir(null); // null
console.dir(undefined); // undefined
console.dir({}); // Object
console.dir([]); // Array
console.dir(printJS); // f printJS{}
*/
/*
const myObject = {
  year: "2024",
  myFace: false,
  sayHi: function (name) {
    console.log(`Hi ${name}`);
  },
};

myObject.sayHi("SeopE");

const myArrey = [
  2024,
  true,
  function (name) {
    console.log(`Hi! ${name}`);
  },
];

myArrey[2]("JavaScript");
*/
/*
function makeQuiz(quiz, answer, success, fail) {
  if (prompt(quiz) === answer) {
    console.log(success());
  } else {
    console.log(fail());
  }
}

function getSuccess(params) {
  return "정답";
}

function getFail(params) {
  return "오답";
}

const question = "5+3=?";
makeQuiz(question, "8", getSuccess, getFail);
*/

function getPrintHi() {
  return function () {
    console.log("Hi");
  };
}

// const sayHi = getPrintHi();
// sayHi();

getPrintHi()();
