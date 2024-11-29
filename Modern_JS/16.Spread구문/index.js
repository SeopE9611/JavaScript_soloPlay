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

/*
const webPublishing = ["HTML", "CSS"];
const interactiveweb = [...webPublishing]; // Spread

interactiveweb.push("JavaScript");

console.log(webPublishing);
console.log(interactiveweb);
*/

/*
const webPublishing = ["HTML", "CSS"];
const interactiveweb = [...webPublishing, "JavaScript"]; // Spread

// interactiveweb.push("JavaScript");

console.log(webPublishing);
console.log(interactiveweb);
*/

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [...arr1, ...arr2];
console.log(arr3);

const arr4 = arr1.concat(arr2);
console.log(arr4);
