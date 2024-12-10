const members = ["행섭", "양천", "스기따라", "힝카인"];

members.forEach((member) => {
  console.log(`${member}님이 접속하였습니다.`);
  members.push("섭이");
  members.pop("섭이");
});

console.log(members);
