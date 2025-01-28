// main.js

const res = await fetch('https://learn.codeit.kr/api/color-surveys');

console.log('Status Code:');
console.log(res.status);
console.log('Headers:');
console.log(res.headers);


