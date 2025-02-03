// main

import { getColorSurveys , getColorSurvey, createColorSurvey } from './api.js';

try {
  const data = await getColorSurveys();
  console.log(data);   
} catch (e) {
  console.log('오류가 발생했습니다.');
  console.log(e.message);
}

