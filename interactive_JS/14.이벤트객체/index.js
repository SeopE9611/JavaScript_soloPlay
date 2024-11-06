// 이벤트 객체 (Event Object)
const myInput = document.querySelector("#myInput");
const myBtn = document.querySelector("#myBtn");

myInput.addEventListener("keydown", function () {
  console.log("키보드 이벤트");
});

myBtn.addEventListener("click", function () {
  console.log("마우스 이벤트");
});

//--------------------------------------------------
function printEvent(e) {
  console.log(e);
}

myInput.addEventListener("keydown", printEvent);
myBtn.addEventListener("click", printEvent);
