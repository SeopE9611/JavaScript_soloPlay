// index.js

//  Step 1. 요소를 가져오기 (document.getElementById)
const box = document.getElementById('box');
const boxColorInput = document.getElementById('box-color');
const boxBorderColorInput = document.getElementById('box-border-color');

// Step 2. 색상이 변경되면 이벤트 감지
boxColorInput.addEventListener('change', (event) => {
  const color = event.target.value;
  // console.log('배경색이 변경됨:', event.target.value);
  // Step 3. 변경된 색상을 박스에 적용
  box.style.backgroundColor = color; 
  //  Step 4. 변경된 색상을 저장 (localStorage)
  localStorage.setItem('boxColor', color);
})

boxBorderColorInput.addEventListener('change', (event) => {
  const borderColor = event.target.value;
  // console.log('테두리색이 변경됨:', event.target.value);
  // Step 3. 변경된 색상을 박스에 적용
  box.style.borderColor = borderColor;
  //  Step 4. 변경된 색상을 저장 (localStorage)
  localStorage.setItem('boxBorderColor', borderColor);
})

// Step 5. 저장된 색상을 페이지 로드 시 다시 적용
function loadSavedColors() {
  // 색상 기본값 설정
  const defaultBoxColor = '#ff0000'; // 기본 배경색 (빨강)
  const defaultBoxBorderColor = '#0000ff'; // 기본 테두리색 (파랑)

  const savedBoxColor = localStorage.getItem('boxColor') || defaultBoxColor; // 저장된 값이 없으면 기본값 사용
  const savedBoxBorderColor = localStorage.getItem('boxBorderColor') || defaultBoxBorderColor; // 저장된 값이 없으면 기본값 사용

  if (savedBoxColor) {
    box.style.backgroundColor = savedBoxColor;
    boxColorInput.value = savedBoxColor;
  }

  if (savedBoxBorderColor) {
    box.style.borderColor = savedBoxBorderColor;
    boxBorderColorInput.value = savedBoxBorderColor;
  }
}

loadSavedColors(); // 페이지 로드 시 실행