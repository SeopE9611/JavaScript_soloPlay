// main.js

// 쿼리 파라미터: mbti, limit, offset
// const res = await fetch('https://learn.codeit.kr/api/color-surveys/?offset=10&limit=10');
const res = await fetch('https://learn.codeit.kr/api/color-surveys/?mbti=ISTJ');
const data = await res.json();

console.log(data);
