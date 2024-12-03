function printPatName(pat) {
  // console.log(pat.dog.name);
  // console.log(pat.dog && pat.dog.name);
  // console.log(pat.dog?.name);
  // console.log(
  //   pat.dog === null || pat.dog === undefined ? undefined : pat.dog.name
  // );
  console.log(pat.dog?.name ?? "pat2 객체에 dog가 없습니다.");
}

const pat = {
  name: "구름이",
  dog: {
    name: "Pomeranians",
    age: 9,
    favorite: "sneak",
  },
};
const pat2 = {
  name: "Cloud",
};

printPatName(pat2);
