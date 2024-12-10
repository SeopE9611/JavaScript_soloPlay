// forEach와 map

const firstName = ["형섭", "명섭", "민섭", "지섭"];
const lastName = ["윤", "융", "용", "영"];

firstName.map((firstName, i, arr) => {
  console.log(`${lastName[i]}${firstName}님 환영합니다.`);
  console.log(arr);
});
