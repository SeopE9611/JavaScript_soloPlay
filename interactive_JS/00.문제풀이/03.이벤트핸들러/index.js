const toDoList = document.querySelector("#to-do-list");
const items = toDoList.children;

// 1. updateToDo 함수를 완성하기
function updateToDo(e) {
  // e.target에 'done' 클래스 속성 값을
  // toggle(.classList.toggle('done')) 함
  e.target.classList.toggle("done");
}

// 2. 반복문을 활용해서 각 li태그에 이벤트 핸들러를 등록하기
// for (let i = 0; i < items.length; i++) {
//   items[i].addEventListener("click", updateToDo);
// }
// 또는 for of 반복문사용
for (let item of items) {
  item.addEventListener("click", updateToDo);
}

// 3. 세 번째 이벤트 핸들러 제거하기
items[2].removeEventListener("click", updateToDo);
