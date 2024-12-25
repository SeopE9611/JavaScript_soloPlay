//calculator.mjs

export const PI = 3.14;

export function add (a,b) {
  return a + b;
}

export function subtract (a,b) {
  return a - b;
}

export function multiply (a,b) {
  return a * b;
}

export function divide (a,b) {
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