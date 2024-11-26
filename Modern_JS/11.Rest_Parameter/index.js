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

/*
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
*/

function printArguments(...args) {
  console.log(args.splice(0, 2)); //Rest Parameter
  console.log(arguments.splice(0, 2)); //arguments // Error

  console.log(`--------------------------`);
}
printArguments("Jung", "Sang", "hwa");
printArguments("Shin");
printArguments("Chang", "Seop");

printArguments("Ronaldo", "Messi");
printArguments("Doran", "Oner", "Deft", "Keria");
