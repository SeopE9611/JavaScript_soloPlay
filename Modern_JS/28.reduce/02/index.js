// reduce
const numbers = [1,2,3,4]

const sumAll = numbers.reduce((acc, el, i)=>{
  console.log(`${i}번 index 요소로 콜백함수가 동작중`);
  console.log('acc:', acc);
  console.log('el:', el);
  console.log('--------------');

  return acc + el;
}, ) // 두 번쨰 아규먼트 초기값을 생략가능

console.log('sumAll:', sumAll);
