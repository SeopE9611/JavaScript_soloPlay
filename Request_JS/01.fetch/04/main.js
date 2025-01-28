// main.js

const res = await fetch('https://learn.codeit.kr/api/color-surveys');
const data = await res.json();

const { results } = data;
const survey = results[0];
const { id, mbti, colorCode, createdAt, updatedAt  } = survey;

console.log(id, mbti, colorCode, createdAt, updatedAt);
