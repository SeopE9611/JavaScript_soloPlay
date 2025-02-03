// api.js

// GET /api/color-surveys를 하는 함수 생성

export async function getColorSurveys(params ={}){
  const url = new URL('https://learn.codeit.krrrrrrrrrrrr/api/color-surveys'); // 잘못된 URL 입력 (오류 예시)
  Object.keys(params).forEach((key) => 
    url.searchParams.append(key, params[key])
    );

  const res = await fetch(url);
  const data = await res.json();

  return data; 
}

// ----------------------------------------------------------------------

// GET /api/color-surveys:id
export async function getColorSurvey(id){
  const res = await fetch(`https://learn.codeit.kr/api/color-surveys/${id}`); 
  const data = await res.json();
  return data;
}

// ----------------------------------------------------------------------

// POST /api/color-surveys
export async function createColorSurvey(surveyData){
  const res = await fetch('https://learn.codeit.kr/api/color-surveys',{ 
    method: 'POST', 
    body: JSON.stringify(surveyData), 
    headers: {
      'Content-Type': 'application/json', 
    }
  });

  const data = await res.json(); 
  return data;
}