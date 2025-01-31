// api.js

// GET /api/color-surveys를 하는 함수 생성

// 함수 안의 await을 사용하므로 async 키워드를 추가하여 비동기 함수로 만들어준다.
export async function getColorSurveys(){
  const url = new URL('https://learn.codeit.kr/api/color-surveys');
  url.searchParams.append('offset', '10');
  url.searchParams.append('limit', '10');

  const res = await fetch(url);
  const data = await res.json();

  return data; // data를 반환
}