// AND, OR의 연산 방식
// console.log("SeopE" && "JavaScript");

console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);

console.log("------------------------------------");

console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);

console.log("------------------------------------");

console.log(null && undefined);
console.log(0 || true);
console.log("0" && NaN);
console.log({} || 123);

console.log("------------------------------------");

function print(value) {
  const message = value || "Hello";
  console.log(message);
}

print();
print("JavaScript");

console.log("------------------------------------");

console.log(true || (false && false)); // true
console.log((true || false) && false); // false

console.log("SeopE" || (NaN && false)); // SeopE
console.log(("SeopE" || NaN) && false); // false
