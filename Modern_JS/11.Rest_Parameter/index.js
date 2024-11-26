// Rest Parameter

/*
function printArguments(a, b, c) {
  for (const arg of arguments) {
    console.log(arg);
  }
  console.log(`--------------------------`);
}
printArguments("Jung", "Sang", "hwa");
printArguments("Shin");
printArguments("Chang", "Seop");

printArguments("Ronaldo", "Messi");
printArguments("Doran", "Oner", "Deft", "Keria");
*/

function printArguments(...args) {
  for (const arg of args) {
    console.log(arg);
  }
  console.log(`--------------------------`);
}
printArguments("Jung", "Sang", "hwa");
printArguments("Shin");
printArguments("Chang", "Seop");

printArguments("Ronaldo", "Messi");
printArguments("Doran", "Oner", "Deft", "Keria");
