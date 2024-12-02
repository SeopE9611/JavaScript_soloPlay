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

console.log(user.getFullName());
console.log(GameId.getFullName());
