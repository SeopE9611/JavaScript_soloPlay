// main

import { getColorSurveys , getColorSurvey, createColorSurvey } from './api.js';

const surveyData = {
  mbti: 'ENFJ',
  colorCode: '#ABCD00',
  password: '0000',
}


const data = await createColorSurvey(surveyData);  // createColorSurvey 함수를 호출하고 surveyData를 인자로 넣어줌
console.log(data);


