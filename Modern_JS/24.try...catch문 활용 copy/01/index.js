// forEach와 map
const members = ["행섭", "스기따라", "양천", "힝카인"];

for (let member of members) {
  console.log(`${member}님이 접속하였습니다.`);
}

console.log(`-------------------------------------`);

members.forEach(function (member) {
  console.log(`$(member) 님이 접속하였습니다. `);
});
