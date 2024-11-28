// 문장 statements
let x;
x = 3;

if (x < 5) {
  console.log("x는 5보다 작다");
} else {
  console.log("x는 5와 같거나 크다");
}

for (let i = 0; i < 5; i++) {
  console.log(i);
}

// 표현식 (expressions)
5;
("string");

console.log(`---------------------------------------`);

5 + 7; // 12
"Seop" + "E";
true && null; // null

console.log(`---------------------------------------`);

const title = "JavaScript";
const myName = {
  name: "SeopE",
};
const numbers = [1, 2, 3];
typeof myName; // object
title; // JavaScript
myName.name; // SeopE
numbers[3]; // undefined

// 표현식이면서 문장, 문장이면서 표현식
// 할당 연산자는 값을 할당하는 동작도 하지만, 할당한 값을 그대로 가지는 표현식이다.
title = "JavaScript"; // JavaScript

// 함수 호출은 함수를 실행하는 동작도 하지만, 실행한 함수의 리턴 값을 가지는 표현식이다.
sayHi(); // sayHi 함수의 리턴 값

// console.log 메소드는 콘솔에 아규먼트를 출력하는 동작도 하지만, undefined 값을 가지는 표현식이다.
console.log("hi"); // undefined
