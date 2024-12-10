// forEach와 map

/*
const firstName = ["형섭", "명섭", "민섭", "지섭"];
const lastName = ["윤", "융", "용", "영"];

const fullNames = firstName.map((firstName, i) => {
  return lastName[i] + firstName;
});

console.log(fullNames);
*/
const firstName = ["형섭", "명섭", "민섭", "지섭"];
const lastName = ["윤", "융", "용", "영"];

const fullNames = firstName.map((firstName, i) => lastName[i] + firstName);

console.log(fullNames);
