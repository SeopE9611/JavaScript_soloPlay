// main

import { getColorSurveys , getColorSurvey, createColorSurvey } from './axiosApi.js';

console.log('GET /color-surveys');
const data = await getColorSurveys({ offset:10, limit:5 });
console.log(data);

console.log('GET /color-surveys/:id');
const survey = await getColorSurvey(20);
console.log(survey);

console.log('POST /color-surveys');
const surveyData = {
  mbti: 'ISFP',
  colorCode: '#123456',
  password: '0000',
};
const newColorSurvey = await createColorSurvey(surveyData);
console.log(newColorSurvey);
