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
