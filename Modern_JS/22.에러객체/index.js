// 에러 객체 (name, message)
/*
//1. ReferenceError
console.log("Start");

const title = "섭이";
console.log(title);
// console.log(myName);

console.log("End");

console.log(`------------------------`);

//2.TypeError
console.log("Start");

const title2 = "섭이";
// console.log(title());
// console.log(myName);

console.log("End");

console.log(`------------------------`);

//3.SyntaxError
console.log("Start");

const ti-tle3 = "섭이";
console.log(title);
console.log(myName);

console.log("End");
*/

// 에러 객체 만들기
console.log("Start");

const error = new TypeError("타입 에러 발생");

throw error;

console.log(error.name);
console.log(error.message);

console.log("End");
