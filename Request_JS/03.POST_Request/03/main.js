// main.js

const surveyData = {
  mbti: 'ENFP',
  colorCode: '#ABCDEF',
  password: '0000',
}

fetch('https://learn.codeit.kr/api/color-surveys',{
  method: 'POST',
  body: JSON.stringify(surveyData), // JSON.stringify() 메소드를 사용하여 surveyData 객체를 JSON 문자열로 변환
  headers: {
    'Content-Type': 'application/json', // 서버에게 전달하는 데이터가 JSON 형식임을 알려주는 헤더
  }
});