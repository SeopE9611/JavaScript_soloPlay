//이벤트 핸들러 등록하기
let btn = document.querySelector("#myBtn");

/*
btn.onclick = function () {
  console.log("Hi");
};

btn.onclick = function () {
  console.log("HiHi");
};
*/

/*
function event1() {
  console.log("Hi");
}

function event2() {
  console.log("HiHi");
}

btn.onclick = function () {
  event1();
  event2();
};
*/

function event1() {
  console.log("Hi");
}

function event2() {
  console.log("HiHi");
}

//elem.addEventListner[event, handler]
btn.addEventListener("click", event1);
btn.addEventListener("click", event2);
