// axiosApi.js
import axios from 'axios'; // axios 라이브러리 불러오기

// GET /api/color-surveys
export async function getColorSurveys(params ={}){
  const res = await axios.get( // axios.get() 사용
    'https://learn.codeit.kr/api/color-surveys',
    { params }, // 두 번째 파라미터 객체로 params 전달
  );
  return res.data; // res.data로 데이터 반환
}

// ----------------------------------------------------------------------

// GET /api/color-surveys:id
export async function getColorSurvey(id){
  const res = await axios.get(`https://learn.codeit.kr/api/color-surveys/${id}`); // axios.get() 사용
  return res.data; // res.data로 데이터 반환
}

// ----------------------------------------------------------------------

// POST /api/color-surveys
export async function createColorSurvey(surveyData){
  const res = await axios.post( // axios.post() 사용
    'https://learn.codeit.kr/api/color-surveys',
    surveyData, // body 데이터를 두 번째 아규먼트로 전달
  );
  return res.data; // res.data로 데이터 반환
}