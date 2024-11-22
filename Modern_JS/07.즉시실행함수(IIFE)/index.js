// 즉시 실행 함수

/*
(function () {
  console.log("Hi!");
})();
*/
/*
(function (x, y) {
  console.log(x + y);
})(3, 5);
*/

/*
(function sayHi() {
  console.log("Hi!");
})();

sayHi(); // ReferenceError
*/
/*
(function countdown(n) {
  console.log(n);
  if (n === 0) {
    console.log("End!");
  } else {
    countdown(n - 1);
  }
})(5);
*/

(function init() {
  // 프로그램이 실행 될 때 기본적으로 동작할 코드들..
})();
