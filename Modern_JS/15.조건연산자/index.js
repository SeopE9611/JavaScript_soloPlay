// 조건 연산자 (Conditional operator)
/*
if (조건) {
  // 조건이 true 일 때 동작
} else {
  // 조건이 false일 때 동작
}

switch (값) {
  case A:
    // 값이 A와 일치할 때 동작
    break;
  default:
  // 값과 일치하는 case가 없을 때 동작
}
*/

// 조건 ? truthy 할 때 표현식 : falsy 할 때 표현식
// 조건 연산자 = 삼항 연산자(Ternary operator)

/*
const CUT_OFF = 80;
function passChecker(score) {
  // return score > CUT_OFF ? "합격" : "불합격";
  if (score > CUT_OFF) {
    return "합격";
  } else {
    return "불합격";
  }
}
console.log(passChecker(70));
*/

// 삼항 연산자는 변수를 선언하거나 조건에 따라 반복문 수행 X
const CUT_OFF = 80;
function passChecker(score) {
  // return score > CUT_OFF ? "합격" : "불합격";
  if (score > CUT_OFF) {
    const msg = "합격"; // 변수 선언하여 그 변수값을 리턴
    return msg;
  } else {
    for (let i = 0; i < 3; i++) {
      // 반복문
      console.log(i);
    }
    return "불합격";
  }
}
console.log(passChecker(70));
