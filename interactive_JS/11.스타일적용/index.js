// 스타일 다루기
const today = document.querySelector('#today');
const tomorrow = document.querySelector('#tomorrow');

//elem.className
today.children[1].className = 'done'

//style 프로퍼티
today.children[0].style.textDecoration = 'line-through'
today.children[0].style.backgroundColor = '#DDDDDD'

