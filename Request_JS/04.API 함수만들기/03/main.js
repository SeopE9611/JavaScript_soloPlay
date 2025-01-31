// main

// GET /api/color-surveys
import { getColorSurveys } from './api.js';
const data = await getColorSurveys({offset:20, limit:20});  // offset과 limit을 인자로 넣어주고 호출
console.log(data);

// ----------------------------------------------------------------------
// GET /api/color-surveys:id
  // const res = awiat fetch('https://learn.codeit.kr/api/color-surveys/5');
  // const data = await res.json();
  // console.log(data);

// ----------------------------------------------------------------------
// POST /api/color-surveys
  // const surveyData = {
  //   mbti: 'ENFP',
  //   colorCode: '#ABCDEF',
  //   password: '0000',
  // }

  // const res = await fetch('https://learn.codeit.kr/api/color-surveys',{ 
  //   method: 'POST', 
  //   body: JSON.stringify(surveyData), 
  //   headers: {
  //     'Content-Type': 'application/json', 
  //   }
  // });

  // const data = await res.json(); 
  // console.log(data); 

