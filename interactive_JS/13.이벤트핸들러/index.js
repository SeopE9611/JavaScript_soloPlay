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
btn.addEventListener("click", event1());
btn.addEventListener("click", event2);

//elem.removeEventListner[event, handler]
btn.removeEventListener("click", event2);

//이벤트를 삭제하려면 반드시 등록할 때 사용했던 핸들러를 그대로 전달해야한다.
btn.addEventListener("click", function () {
  console.log("event3");
});

btn.removeEventListener("click", function () {
  console.log("event3");
});
