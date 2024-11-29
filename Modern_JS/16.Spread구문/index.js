// Spread 구문 (Spread Syntax)
/*
const number = [1, 2, 3];
console.log(...number);
*/
/*
const webPublishing = ["HTML", "CSS"];
const interactiveweb = webPublishing.slice();

interactiveweb.push("JavaScript");

console.log(webPublishing);
console.log(interactiveweb);
*/

const webPublishing = ["HTML", "CSS"];
const interactiveweb = [...webPublishing]; // Spread

interactiveweb.push("JavaScript");

console.log(webPublishing);
console.log(interactiveweb);
