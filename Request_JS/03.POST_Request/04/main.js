// main.js

const surveyData = {
  mbti: 'ENFP',
  colorCode: '#ABCDEF',
  password: '0000',
}

const res = await fetch('https://learn.codeit.kr/api/color-surveys',{ // fetch() 함수를 사용하여 서버에 POST 요청을 보냄
  method: 'POST', // POST 요청을 보내기 위해 method 속성에 'POST'를 지정
  body: JSON.stringify(surveyData), // JSON.stringify() 메소드를 사용하여 surveyData 객체를 JSON 문자열로 변환
  headers: {
    'Content-Type': 'application/json', // 서버에게 전달하는 데이터가 JSON 형식임을 알려주는 헤더
  }
});

const data = await res.json(); // JSON 형식으로 받은 응답을 자바스크립트 객체로 변환
console.log(data); // 서버로부터 받은 응답 출력
