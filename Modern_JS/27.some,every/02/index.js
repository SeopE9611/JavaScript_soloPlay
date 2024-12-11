// some, every
const numbers = [];

const someReturn = numbers.some((el, i) => {
  console.log('some:',i);
  return el > 5;
});

const everyReturn = numbers.every((el, i) => {
  console.log('every:',i);
  return el > 5;
});

console.log('some:', someReturn);
console.log('every:', everyReturn);
