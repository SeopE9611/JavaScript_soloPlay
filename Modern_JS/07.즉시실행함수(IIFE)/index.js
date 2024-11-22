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

(function sayHi() {
  console.log("Hi!");
})();

sayHi(); // ReferenceError
