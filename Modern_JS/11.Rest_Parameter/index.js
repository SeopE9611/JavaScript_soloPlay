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

/*
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
*/

function Worlds2024(first, second, ...others) {
  console.log("2024 월즈 최종결과");
  console.log(`우승: ${first}`);
  console.log(`준우승: ${second}`);
  console.log("--------------------");
  for (const arg of others) {
    console.log(`우승맴버: ${arg}`);
  }
}
Worlds2024("T1", "BLG", "Zeus", "Oner", "Faker", "Gumayusi", "Keria");
