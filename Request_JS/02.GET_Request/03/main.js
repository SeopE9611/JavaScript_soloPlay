// main.js

// 쿼리 파라미터: mbti, limit, offset
const res = await fetch('https://learn.codeit.kr/api/color-surveys/5');
const data = await res.json();

console.log(data);
 