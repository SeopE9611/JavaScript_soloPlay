//calculator.mjs

const PI = 3.14;

function add (a,b) {
  return a + b;
}

function subtract (a,b) {
  return a - b;
}

function multiply (a,b) {
  return a * b;
}

function divide (a,b) {
  return a / b;
}

const calculator = {
  PI,
  add,
  subtract,
  multiply,
  divide,
};

export default calculator;