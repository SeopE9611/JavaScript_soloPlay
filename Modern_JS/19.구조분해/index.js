// 구조 분해 (Destructuring)
const rank = ["행섭", "죡팡", "힝카인", "찌듕", "스기따라"];

// const macbook = rank[0];
// const ipad = rank[1];
// const airpods = rank[2];
// const coupon = rank[3];

// const [macbook, ipad, airpods, coupon] = rank;
const [macbook, ipad, airpods, ...coupon] = rank;

console.log("맥북:", macbook);
console.log("아이패드:", ipad);
console.log("에어팟:", airpods);
console.log("무신사쿠폰:", coupon);
