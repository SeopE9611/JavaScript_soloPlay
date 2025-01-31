// api.js

// GET /api/color-surveys를 하는 함수 생성

export async function getColorSurveys(params ={}){
  const url = new URL('https://learn.codeit.kr/api/color-surveys');
  Object.keys(params).forEach((key) => 
    url.searchParams.append(key, params[key])
    );

  const res = await fetch(url);
  const data = await res.json();

  return data; 
}

// ----------------------------------------------------------------------

// GET /api/color-surveys:id
export async function getColorSurvey(id){ // getColorSurvey 함수 생성하고 id를 파라미터로 받음
  const res = await fetch(`https://learn.codeit.kr/api/color-surveys/${id}`); // 백틱을 사용하여 id를 URL에 추가
  const data = await res.json();
  return data;
}
