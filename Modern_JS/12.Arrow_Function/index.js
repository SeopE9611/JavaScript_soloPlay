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
/*
const getTwice = (number) => {
  return number * 2;
};
console.log(getTwice(5));
*/
/*
const getTwice = (number) => number * 2;
console.log(getTwice(10));

const myBtn = document.querySelector("#myBtn");
myBtn.addEventListener("click", () => {
  console.log("button click");
});
*/

//함수 표현식, 함수 선언, 화살표 함수의 차이
/*
const getTwice = function (number) {
  return number * 2;
};

function getTwice(number) {
  return number * 2;
}

const getTwice = (number) => number * 2;
console.log(getTwice(10));
*/

// 파라미터 소괄호 생략가능
const getTwice = (number) => {
  return number * 2;
};
console.log(getTwice(5));

// 파라미터가 두 개 이상 일 때
const sum = (a, b) => {
  return a + b;
};
console.log(sum(1, 5));

const getTest = () => {
  return { name: "Test" };
};

console.log(getTest());

// return 키워드 생략가능
const getTwice2 = (number) => number * 2;
console.log(getTwice2(10));

// 리턴문 외에 다른 표현들이 필요한 상황에선 생략 불가능
const sum1 = (a, b) => {
  const result = a + b;
  return result;
};
console.log(sum1(1, 5));
