// 함수를 만드는 방법

/*  function 함수이름(파라미터) {
      필요한 동작;
      return 리턴값;
    }
*/

// 함수 표현식(Function Expression)
/*const printStudy = function () {
  console.log("Modern JS");
};

printStudy();
*/

// 이벤트 만들 때의 함수 표현식 활용
/*const myBtn = document.querySelector("#myBtn");

myBtn.addEventListener("click", function () {
  console.log("button clicked");
});
*/

// 함수 선언 - 선언하기 전 호출 가능 (호이스팅)
/*
printStudy();

function printStudy() {
  console.log("Modern JS");
}
*/

//함수 표현식 - 선언하기 전 호출 불가능
printStudy();
const printStudy = function () {
  console.log("Modern JS");
};
