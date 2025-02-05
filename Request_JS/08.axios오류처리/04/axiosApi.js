// axiosApi.js
import axios from 'axios'; // axios 라이브러리 불러오기

const instance = axios.create({ // axios.create()로 인스턴스 생성
  baseURL: 'https://learn.codeit.krㄱ/api', // baseURL 설정
  timeout: 3000, // 3초로 타임아웃 설정
})

// GET /api/color-surveys
export async function getColorSurveys(params ={}){
  const res = await instance.get( '/color-surveys',{ params }); // 인스턴스로 get 요청
  return res.data; 
}

// ----------------------------------------------------------------------

// GET /api/color-surveys:id
export async function getColorSurvey(id){
  const res = await instance.get(`/color-surveys/${id}`); // 인스턴스로 get 요청
  return res.data;
}

// ----------------------------------------------------------------------

// POST /api/color-surveys
export async function createColorSurvey(surveyData){
  const res = await instance.post('/color-surveys',surveyData); // 인스턴스로 post 요청
  return res.data;
}