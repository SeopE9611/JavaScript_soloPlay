// console.log('시작');

// //setInterval(callback, interval)
// setInterval(() => console.log('2초가 지났습니다'),2000);

// console.log('끝');


console.log('시작');

const IntervalID = setInterval(() => console.log('2초가 지났습니다'),2000);

// 7초후에 setInterval() 해제
setTimeout(() => clearInterval(IntervalID), 7000)
console.log('끝');

