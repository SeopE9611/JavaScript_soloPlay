// null 연산자 - Nullish coalescing operator

const example1 = null ?? "I";
const example2 = undefined ?? "love";
const example3 = "JavaScript" ?? "SeopE";

console.log(example1, example2, example3);

console.log(`---------------------------------`);

const title1 = null || "SeopE";
const title2 = null ?? "SeopE";

console.log(title1);
console.log(title2);

console.log(`---------------------------------`);

const title1 = false || "SeopE";
const title2 = false ?? "SeopE";

console.log(title1); // codeit
console.log(title2); // false

const width1 = 0 || 150;
const width2 = 0 ?? 150;

console.log(width1); // 150
console.log(width2); // 0
