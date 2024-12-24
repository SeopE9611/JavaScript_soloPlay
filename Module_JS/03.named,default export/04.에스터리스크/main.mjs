// main.mjs
// 에스터리스크 *을 사용하여 파일에서 named export되는 모든 것을 한꺼번에 import

import * as calculator from './calculator.mjs';

console.log(calculator.PI);
console.log(calculator.add(1, 2));
console.log(calculator.subtract(1, 2));
console.log(calculator.multiply(1, 2));
console.log(calculator.divide(1, 2));
