// 구조 분해 (Destructuring)
const macbook = {
  title: "맥북 프로",
  price: 1000000,
  memory: "16GB",
  storage: "1TB",
  "serial-num": "ABCDEFG123",
};

// const title = macbook.title;
// const price = macbook.price;

// const { title, price } = macbook; // 구조 분해
// const { title, color } = macbook; // // 존재하지 않는 프로퍼티
// const { title, color = "실버 색상" } = macbook; // 기본값 지정
// const { title: product, ...rest } = macbook; // // product 새로운 변수명 선언
const { title: product, "serial-num": serialNumber } = macbook;

console.log(product);
console.log(serialNumber);
