// 구조 분해 (Destructuring) - 배열
/*
function getArray() {
  return ["컴퓨터", "냉장고", "세탁기"];
}

const [el1, el2, el3] = getArray();
console.log(el1);
console.log(el2);
console.log(el3);
*/

/*
// function printWinners(...arg) {
function printWinners([macbook, ipad, airpods, ...coupon]) {
  // const [macbook, ipad, airpods, ...coupon] = arg;

  console.log(`맥북 당첨자: ${macbook}`);
  console.log(`아이패드 당첨자: ${ipad}`);
  console.log(`에어팟 당첨자: ${airpods}`);
  console.log(`무신사 쿠폰 당첨자는 다음과 같습니다.`);

  for (let user of coupon) {
    console.log(`${user}`);
  }
  console.log(`쿠폰 수령 인원: ${coupon.length} 명`);
}

// printWinners("행섭", "양천", "힝카인", "스기따라", "찌듕", "넌적혈구");
const rank = ["행섭", "양천", "힝카인", "스기따라", "찌듕", "넌적혈구"];
printWinners(rank);
*/

// 구조 분해 (Destructuring) - 객체
/*
function getObject() {
  return {
    name: "SeopE",
    birth: 2024,
    job: "백수",
  };
}

const { name: brand, birth, job } = getObject();
console.log(brand);
console.log(birth);
console.log(job);
*/

const macbook = {
  title: "맥북 프로",
  price: 1000000,
  memory: "16GB",
  storage: "1TB",
  "serial-num": "ABCDEFG123",
};

function printSummary({ title, price, memory }) {
  // const { title, price, memory } = object;
  // console.log(`상품명: ${object.title}`);
  // console.log(`가격: ${object.price} 원`);
  // console.log(`옹량: ${object.memory}`);
  console.log(`상품명: ${title}`);
  console.log(`가격: ${price} 원`);
  console.log(`옹량: ${memory}`);
}
printSummary(macbook);
