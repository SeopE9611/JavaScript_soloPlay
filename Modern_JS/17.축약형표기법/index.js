const myName = "SeopE";
const birth = "0101";
const job = "백수";

const user = {
  // myName: myName,
  // birth: birth,
  // job: job,
  myName,
  birth,
  job,
};

console.log(user);

console.log(`------------------------------------`);
/*
function getFullName() {
  return `${this.firstName} ${this.lastName}`;
}

const user1 = {
  firstName: "Seop",
  lastName: "Yee",
  // getFullName: getFullName, // 생략 가능
  getFullName,
};

const GameId = {
  firstName: "baxter",
  lastName: "yhs",
  // getFullName: getFullName, // 생략 가능
  getFullName,
};

console.log(user1.getFullName());
console.log(GameId.getFullName());
*/
console.log(`--------------------------------------`);

const user1 = {
  firstName: "Seop",
  lastName: "Yee",
  // getFullName: function () { // 콜론과 function 생략가능
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};
console.log(user1.getFullName());

console.log(`--------------------------------------`);

//계산된 속성명 (Computed property name)
// 프로퍼티 네임을 표현식으로 나타냄
/*
const test = {
  [표현식]: 값,
};
*/
console.log(`--------------------------------------`);

const tester = {
  ["Seop" + "E"]: "value",
};
console.log(tester);

console.log(`--------------------------------------`);

const propertyName = "birth";
const getJob = () => "job";

const x = {
  ["your" + "name"]: "SeopE",
  [propertyName]: 2024,
  [getJob()]: "백수",
};

console.log(x);
