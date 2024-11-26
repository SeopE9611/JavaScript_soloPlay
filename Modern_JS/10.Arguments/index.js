// Arguments

/*
function printArguments(a, b, c) {
  console.log(a);
  console.log(b);
  console.log(c);
  console.log(arguments);
  console.log(`--------------------------`);
}
printArguments("Jung", "Sang", "hwa");
printArguments("Shin");
printArguments("Chang", "Seop");

printArguments("Ronaldo", "Messi");
printArguments("Doran", "Oner", "Deft", "Keria");
*/
/*
function printArguments(a, b, c) {
  console.log(a);
  console.log(b);
  console.log(c);
  console.log(arguments.length);
  console.log(`--------------------------`);
}
printArguments("Jung", "Sang", "hwa");
printArguments("Shin");
printArguments("Chang", "Seop");

printArguments("Ronaldo", "Messi");
printArguments("Doran", "Oner", "Deft", "Keria");
*/

/*
function printArguments(a, b, c) {
  console.log(arguments[0]);
  console.log(arguments[1]);
  console.log(arguments.length);
  console.log(`--------------------------`);
}
printArguments("Jung", "Sang", "hwa");
printArguments("Shin");
printArguments("Chang", "Seop");

printArguments("Ronaldo", "Messi");
printArguments("Doran", "Oner", "Deft", "Keria");
*/

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
