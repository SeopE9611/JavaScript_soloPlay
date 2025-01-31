// main

// GET /api/color-surveys
const url = new URL('https://learn.codeit.kr/api/color-surveys');
url.searchParams.append('offset', '10');
url.searchParams.append('limit', '10');

const res = await fetch(url);
const data = awiat res.json();
console.log(data);

// ----------------------------------------------------------------------
// GET /api/color-surveys:id
const res = awiat fetch('https://learn.codeit.kr/api/color-surveys/5');
const data = await res.json();
console.log(data);

// ----------------------------------------------------------------------
// POST /api/color-surveys
const surveyData = {
  mbti: 'ENFP',
  colorCode: '#ABCDEF',
  password: '0000',
}

const res = await fetch('https://learn.codeit.kr/api/color-surveys',{ 
  method: 'POST', 
  body: JSON.stringify(surveyData), 
  headers: {
    'Content-Type': 'application/json', 
  }
});

const data = await res.json(); 
console.log(data); 

