// Arrow Function

/*
// 화살표 함수 적용 전
const getTwice = function (number) {
  return number * 2;
};

console.log(getTwice(5));

const myBtn = document.querySelector("#myBtn");
myBtn.addEventListener("click", function () {
  console.log("button click");
});
*/

// 화살표 함수 적용 후
const getTwice = (number) => {
  return number * 2;
};

console.log(getTwice(5));

const myBtn = document.querySelector("#myBtn");
myBtn.addEventListener("click", () => {
  console.log("button click");
});
