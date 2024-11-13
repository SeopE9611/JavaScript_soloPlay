function showTitle(e) {
  //이벤트 객체의 target 프로퍼티에 담긴 요소에 data-title 속성의 값을 가지고 있는지 확인
  if (e.target.dataset.title) {
    const span = document.createElement("span"); // span 태그 형태의 요소 노드 생성
    span.classList.add("title"); // span 요소 노드는 title이라는 class 값을 가지고 있어야하기에 추가
    span.textContent = e.target.dataset.title; //span 요소 노드의 내부에 target 프로퍼티에 담긴 요소의 data-title 속성에 담긴 값을 할당
    e.target.append(span); //span 요소 노드를 target 프로퍼티에 담긴 요소의 마지막 자식 요소 노드로 추가
  }
}

function removeTitle(e) {
  // 이벤트 객체의 target 프로퍼티에 담긴 요소에 data-title 속성의 값을 가지고 있는지 확인
  if (e.target.dataset.title) {
    e.target.lastElementChild.remove(); // 이벤트 객체의 target 프로퍼티에 담긴 요소의 가장 마지막 자식 요소 제거
  }
}

//이벤트 핸들러 등록
//공통 부모 태그 = map
//map class를 가진 div 태그에 이벤트 핸들러 동작해야함
const map = document.querySelector(".map");
map.addEventListener("mouseover", showTitle);
map.addEventListener("mouseout", removeTitle);
