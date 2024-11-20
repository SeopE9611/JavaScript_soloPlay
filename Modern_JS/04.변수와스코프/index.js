// 변수와 스코프

// console.log(title);
// var title = "SeopE";
// console.log(title);

// console.log(title);
// let title;

// var title = "SeopE";
// console.log(title);
// var title = "JavaScript";
// console.log(title);

// let title = "SeopE";
// console.log(title);
// let title = "JavaScript";
// console.log(title);

var x = 3; // 전역 변수

function myFunc() {
  var y = 4; // 지역 변수
  console.log(`x in myFunc: ${x}`);
  console.log(`y in myFunc: ${y}`);
}

myFunc();
console.log(x);
console.log(y);

var x = 3;
if (x < 4) {
  var y = 3;
}

for (var i = 0; i < 5; i++) {
  console.log(i);
}

console.log("x:", x);
console.log("y:", y);
console.log("i:", i);
