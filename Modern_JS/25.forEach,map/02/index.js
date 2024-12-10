// forEach의 파라미터들

const members = ["행섭", "스기따라", "양천", "힝카인"];

members.forEach((member, i) => {
  console.log(`${i} ${member}님이 접속하였습니다.`);
});

console.log(`--------------------------`);

const firstName = ["형섭", "명섭", "민섭", "지섭"];
const lastName = ["윤", "융", "용", "영"];

firstName.forEach((firstName, i) => {
  console.log(`${lastName[i]}${firstName}님 환영합니다.`);
});

console.log(`--------------------------`);

const firstName2 = ["형섭", "명섭", "민섭", "지섭"];
const lastName2 = ["윤", "융", "용", "영"];

firstName.forEach((firstName2, i, arr) => {
  console.log(`${lastName2[i]}${firstName2}님 환영합니다.`);
  console.log(arr);
});
