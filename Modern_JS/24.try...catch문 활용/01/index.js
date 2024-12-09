// try catch문 활용
function printMembers(members) {
  for (const member of members) {
    console.log(member);
  }
}

const oldTeam = ["넌적혈구", "스기따라", "행섭", "양천", "데셔"];
printMembers(oldTeam);

const Team = { name: "메롱팟" };
printMembers(Team);

const youngTeam = ["찌듕", "힝카인"];
printMembers(youngTeam);
