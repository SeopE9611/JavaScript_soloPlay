// main

// GET /api/color-surveys
import { getColorSurveys } from './api.js';
const data = await getColorSurveys();  // getColorSurveys 함수를 호출하여 data에 저장, await을 사용하므로 async 함수 안에서 사용
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

