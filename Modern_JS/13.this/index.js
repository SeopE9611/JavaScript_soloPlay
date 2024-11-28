//this
// console.log(this);

function getFullName() {
  return `${user.firstName} ${user.lastName}`;
}

const user = {
  firstName: "Seop",
  lastName: "Yee",
  getFullName: getFullName,
};

const GameId = {
  firstName: "baxter",
  lastName: "yhs",
  getFullName: getFullName,
};

console.log(user.getFullName());
console.log(GameId.getFullName());
