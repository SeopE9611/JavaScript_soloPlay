// api.js

// GET /api/color-surveys를 하는 함수 생성

export async function getColorSurveys(params ={}){
  const url = new URL('https://learn.codeit.kr/api/color-surveys');
  Object.keys(params).forEach((key) => 
    url.searchParams.append(key, params[key])
    ); // forEach로 params의 key를 하나씩 가져와서 url.searchParams.append로 url에 추가

  const res = await fetch(url);
  const data = await res.json();

  return data; 
}