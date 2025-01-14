//this
// console.log(this);

/*
function getFullName() {
  return `${this.firstName} ${this.lastName}`;
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
*/

/*
console.log(this);

function printThis() {
  console.log(this);
}
printThis();

const myObj = {
  content: "myObj",
  printThis: printThis,
};

const otherObj = {
  content: "otherObj",
  printThis: printThis,
};

myObj.printThis();
otherObj.printThis();
*/

const printThis = () => {
  //화살표 함수
  console.log(this);
};

const myObj = {
  content: "myObj",
  printThis: printThis,
};

const otherObj = {
  content: "otherObj",
  printThis: printThis,
};

myObj.printThis();
otherObj.printThis();
