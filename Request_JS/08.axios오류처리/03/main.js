// main

import { getColorSurveys , getColorSurvey, createColorSurvey } from './axiosApi.js';

try {
  const survey = await getColorSurvey(12334);
  console.log(survey);
} catch (e) {
  console.log('오류가 발생했습니다.');
  console.log(e.response.status); // status 프로퍼티 접근
  console.log(e.response.headers);  // headers 프로퍼티 접근
  
}