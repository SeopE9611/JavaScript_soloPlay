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
