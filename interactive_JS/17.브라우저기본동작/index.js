// 브라우저의 기본 동작
const link = document.querySelector("#link");
const checkbox = document.querySelector("#checkbox");
const input = document.querySelector("#input");
const text = document.querySelector("#text");

//event.preventDefault
link.addEventListener("click", function (e) {
  e.preventDefault();
  alert("이동 불가");
});

input.addEventListener("keydown", function (e) {
  if (!checkbox.checked) {
    e.preventDefault();
    alert("체크박스를 먼저 클릭하세요.");
  }
});

window.addEventListener("contextmenu", function (e) {
  e.preventDefault();
  alert("마우스 오른쪽 클릭 사용 불가");
});
