// filter와 find
const BossGroup = [
  { name: "행섭", job: "비숍", type: "마법사" },
  { name: "양천", job: "캐논마스터", type: "해적" },
  { name: "스기따라", job: "배틀메이지", type: "마법사" },
  { name: "힝카인", job: "카인", type: "궁수" },
  { name: "귀여운적혈구", job: "다크나이트", type: "전사" },
  { name: "저섭", job: "바이퍼", type: "해적" },
  { name: "찌듕", job: "아크메이지:불독", type: "마법사" },
  { name: "넌적혈구", job: "아델", type: "전사" },
  { name: "메르미르시츄", job: "메르세데스", type: "궁수" },
];

const types = BossGroup.filter((el) => el.type === "마법사");
console.log(types);

const jobs = BossGroup.filter((el) => el.job === "바이퍼")
console.log(...jobs);
