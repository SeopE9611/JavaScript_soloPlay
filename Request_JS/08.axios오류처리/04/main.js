// main

import { getColorSurveys , getColorSurvey, createColorSurvey } from './axiosApi.js';

const surveyData = {
  mbti: 'ESFJ',
  password: '0000',

}
try {
  const survey = await createColorSurvey(surveyData);
  console.log(survey);
} catch (e) {
  if(e.response){ // response 객체의 프로퍼티가 있는지 확인
    console.log(e.response.status); 
    console.log(e.response.data); 
  }else{
    console.log('리퀘스트가 실패했습니다..');   
  }
}