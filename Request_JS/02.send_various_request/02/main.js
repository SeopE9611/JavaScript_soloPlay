// main.js

// 쿼리 파라미터: mbti, limit, offset
const url = new URL('https://learn.codeit.kr/api/color-surveys');
url.searchParams.append('offset', '10');
url.searchParams.append('limit', '10');

const res = await fetch(url);
const data = await res.json();

console.log(data);
 