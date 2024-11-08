// 이벤트 객체 (Event Object)
const myInput = document.querySelector("#myInput");
const myBtn = document.querySelector("#myBtn");

function printEvent(e) {
  console.log(e);
  e.target.style.color = "red"; //target - 글자 색상 red
}

myInput.addEventListener("keydown", printEvent);
myBtn.addEventListener("click", printEvent);
