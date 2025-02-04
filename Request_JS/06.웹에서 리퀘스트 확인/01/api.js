// api.js

// GET /api/color-surveys를 하는 함수 생성

export async function getColorSurveys(params ={}){
  const url = new URL('https://learn.codeit.kr/api/color-surveys'); // 잘못된 URL 입력 (오류 예시)
  Object.keys(params).forEach((key) => 
    url.searchParams.append(key, params[key])
    );

  const res = await fetch(url); 

  if (!res.ok) { // !res.ok : 응답이 성공적이지 않을 때
    throw new Error("데이터를 불러오는데 실패했습니다."); // throw new Error() : 에러 발생
  }

  const data = await res.json();

  return data;
}

// ----------------------------------------------------------------------

// GET /api/color-surveys:id
export async function getColorSurvey(id){
  const res = await fetch(`https://learn.codeit.kr/api/color-surveys/${id}`);
  
  if (!res.ok) { // !res.ok : 응답이 성공적이지 않을 때
    throw new Error("데이터를 불러오는데 실패했습니다."); // throw new Error() : 에러 발생
  }
  
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

  if (!res.ok) { // !res.ok : 응답이 성공적이지 않을 때
    throw new Error("데이터를 생성하는데 실패했습니다."); // throw new Error() : 에러 발생
  }

  const data = await res.json(); 
  return data;
}