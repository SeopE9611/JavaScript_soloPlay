const toDoList = document.querySelector("#to-do-list");

// 1. updateToDo 함수 완성하기
function updateToDo(e) {
  if (e.target.classList.contains("item")) {
    e.target.classList.toggle("done");
  }
}

// 2. 각 li 태그가 아니라 하나의 태그에만 이벤트 핸들러를 등록하기

toDoList.addEventListener("click", updateToDo);

// 테스트 코드
const newToDo = document.createElement("li");
newToDo.textContent = "가계부 정리하기";
newToDo.classList.add("item");
toDoList.append(newToDo);

toDoList.children[2].addEventListener("click", function (e) {
  e.stopPropagation();
});
