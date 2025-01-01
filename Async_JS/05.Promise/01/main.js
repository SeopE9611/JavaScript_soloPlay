// main.js
const response = await fetch('naver.com');
const data = await response.json();
console.log(data);