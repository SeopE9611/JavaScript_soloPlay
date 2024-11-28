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
