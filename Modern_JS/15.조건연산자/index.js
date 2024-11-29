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
const CUT_OFF = 80;
function passChecker(score) {
  return score > CUT_OFF ? "합격" : "불합격";
}
console.log(passChecker(70));
