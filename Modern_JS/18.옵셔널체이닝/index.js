function printPatName(pat) {
  // console.log(pat.dog.name);
  // console.log(pat.dog && pat.dog.name);
  console.log(pat.dog?.name);
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

printPatName(pat);
