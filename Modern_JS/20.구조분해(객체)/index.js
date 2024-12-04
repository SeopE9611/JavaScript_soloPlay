// 구조 분해 (Destructuring)
const macbook = {
  title: "맥북 프로",
  price: 1000000,
  memory: "16GB",
  storage: "1TB",
};

// const title = macbook.title;
// const price = macbook.price;

const { title, price } = macbook; // 구조 분해

console.log(title);
console.log(price);
