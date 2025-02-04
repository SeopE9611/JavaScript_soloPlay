// main

import { getColorSurveys , getColorSurvey, createColorSurvey } from './api.js';

try {
  const data = await getColorSurveys({mbti:'T발C냐'}); // 유효하지 않은 mbti
  console.log(data);   
} catch (e) {
  console.log('오류가 발생했습니다.');
  console.log(e.message); 
}
