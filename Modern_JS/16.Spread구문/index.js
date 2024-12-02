// Spread 구문 (Spread Syntax)
/*
const number = [1, 2, 3];
console.log(...number);
*/
/*
const webPublishing = ["HTML", "CSS"];
const interactiveweb = webPublishing.slice();

interactiveweb.push("JavaScript");

console.log(webPublishing);
console.log(interactiveweb);
*/

/*
const webPublishing = ["HTML", "CSS"];
const interactiveweb = [...webPublishing]; // Spread

interactiveweb.push("JavaScript");

console.log(webPublishing);
console.log(interactiveweb);
*/

/*
const webPublishing = ["HTML", "CSS"];
const interactiveweb = [...webPublishing, "JavaScript"]; // Spread

// interactiveweb.push("JavaScript");

console.log(webPublishing);
console.log(interactiveweb);
*/
/*
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [...arr1, ...arr2];
console.log(arr3);

const arr4 = arr1.concat(arr2);
console.log(arr4);
*/
/*
const introduce = (myName, birth, job) => {
  console.log("안녕하세요");
  console.log(`제 이름은 ${myName} 입니다.`);
  console.log(`제 생일은 ${birth} 입니다.`);
  console.log(`직업은 ${job} 입니다.`);
};
const myArr = ["섭이", "0101", "백수"];
introduce(...myArr);
*/

const member = ["섭이", "쑹이", "섭섭"];
const newObj = { ...member };
console.log(newObj);
