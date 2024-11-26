// Parameter
/*
function greeting(name = "SeopE") {
  console.log(`my name is ${name}...`);
}

greeting("JavaScript");
greeting("SeopE");
greeting();
*/

function greeting(name = "SeopE", interest) {
  console.log(`my name is ${name}...`);
  console.log(`I like ${interest}`);
}
greeting("JavaScript");

console.log("-----------------------------------");

function greeting(name = "SeopE", interest) {
  console.log(`my name is ${name}...`);
  console.log(`I like ${interest}`);
}
greeting(undefined, "JavaScript");

console.log("-----------------------------------");

function defaultTest(x, y = x + 3) {
  console.log(`x: ${x}`);
  console.log(`x: ${y}`);
}
defaultTest(2);
// defaultTest(2,3);
