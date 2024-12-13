// Set 생성
const members= new Set();

// add 메소드
members.add('행섭'); // Set(1) {"행섭"}
members.add('양천'); // Set(1) {"행섭,양천"}
members.add('스기따라'); // Set(1) {"행섭,양천,스기따라"}
members.add('힝카인'); // Set(1) {"행섭,양천,스기따라,힝카인"}

// has 메소드
console.log(members.has('행섭')); // true
console.log(members.has('찌듕')); // false

// size 프로퍼티
console.log(members.size); // 4

// delete 메소드
members.delete('넌적혈구'); // false
console.log(members.size); // 4
members.delete('양천') // true
console.log(members.size); // 3

// claer 메소드
members.clear();
console.log(members.size); // 0


