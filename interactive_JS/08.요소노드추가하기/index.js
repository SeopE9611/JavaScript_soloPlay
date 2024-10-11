// innerHTML, outerHTML의 고찰
const today = document.querySelector('#today');

today.innerHTML = '<li>처음</li>' + today.innerHTML;
today.innerHTML = today.innerHTML + '<li>마지막</li>';

today.outerHTML = '<p>이전</p>' + today.outerHTML; 

const newToday = document.querySelector('#today');
newToday.outerHTML = newToday.outerHTML + '<p>다음</p>';

// 요소 노드 추가하기
const tomorrow = document.querySelector('#tomorrow');

console.log('--------------------------------------------------');

// 1. 요소 노드 만들기 - document.createElement('태그이름')
const first = document.createElement('li')

// 2. 요소 노드 꾸미기 - textContent, innerHTML....
first.textContent = '처음'