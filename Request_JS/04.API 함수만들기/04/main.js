// main

// GET /api/color-surveys
import { getColorSurveys , getColorSurvey } from './api.js';
const data = await getColorSurvey(10); // getColorSurvey 함수를 호출하고 id를 인자로 넣어줌  
console.log(data);


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

