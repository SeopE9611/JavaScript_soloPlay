// main

import { getColorSurveys , getColorSurvey, createColorSurvey } from './axiosApi.js';

try {
  const survey = await getColorSurvey(999999);
  console.log(survey);
} catch (e) {
  console.log('오류가 발생했습니다.');
  console.log(e.response); // response 프로퍼티 접근
}