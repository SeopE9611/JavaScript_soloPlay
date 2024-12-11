// some, every
const numbers = [1,3,5,7,9];

const someReturn = numbers.some((el) => el > 5);

const everyReturn = numbers.every((el) => el > 5);

console.log('some:', someReturn);
console.log('every:', everyReturn);
