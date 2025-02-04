import { getColorSurvey, createColorSurvey } from './api.js';

const btn = document.querySelector('button');
const statusDiv = document.querySelector('div.status');
const dataDiv = document.querySelector('div.data');
const mbtiInput = document.querySelector('#mbti');
const colorCodeInput = document.querySelector('#colorCode');

btn.addEventListener('click', async function (e) { // 이벤트 핸들러 함수는 async 함수로 작성
  statusDiv.textContent = '로딩 중...'; // 버튼 클릭 시 로딩 중으로 상태 변경
  dataDiv.innerHTML = '';  // 데이터 출력 영역 초기화
  try { // try-catch 문으로 에러 처리
    const survey = await getColorSurvey(3); // getColorSurvey 함수 호출
    statusDiv.textContent = '완료'; // 완료로 상태 변경
    dataDiv.innerHTML = `<span>${survey.mbti}</span><span>${survey.colorCode}</span>`; // 데이터 출력
  } catch (e) { // 에러 발생 시
    statusDiv.textContent = '오류'; // 오류로 상태 변경
    dataDiv.innerHTML = `<span>${e.message}</span>`; // 에러 메시지 출력
  }
});