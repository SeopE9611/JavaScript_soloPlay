// 스타일 다루기
const today = document.querySelector('#today');
const tomorrow = document.querySelector('#tomorrow');


//elem.classList : add, remove, toggle
// console.log(today.classList);
// console.log(today.children[1].classList);
const item = tomorrow.children[1]
item.classList.add('done', 'other') 

//elem.className
today.children[1].className = 'done'

//style 프로퍼티
today.children[0].style.textDecoration = 'line-through'
today.children[0].style.backgroundColor = '#DDDDDD'

