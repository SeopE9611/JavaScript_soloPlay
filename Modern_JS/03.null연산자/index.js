// null 연산자 - Nullish coalescing operator

const example1 = null ?? "I";
const example2 = undefined ?? "love";
const example3 = "JavaScript" ?? "SeopE";

console.log(example1, example2, example3);

console.log(`------------------------------------`);

const Name1 = null || "SeopE";
const Name2 = null ?? "SeopE";

console.log(Name1);
console.log(Name2);

console.log(`---------------------------------`);

const title1 = false || "SeopE";
const title2 = false ?? "SeopE";

console.log(title1);
console.log(title2);

const width1 = 0 || 150;
const width2 = 0 ?? 150;

console.log(width1);
console.log(width2);
