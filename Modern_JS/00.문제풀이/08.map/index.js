const numbers = [1, 2, 3, 4, 5];

const doubledNumbers = numbers.map(function (number) {
  return number * 2; // 매핑된 새로운 배열로 반환
});

console.log(doubledNumbers);

console.log(numbers);
