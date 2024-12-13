// Set 생성
const members= new Set();

// add 메소드
members.add('행섭'); // Set(1) {"행섭"}
members.add('양천'); // Set(2) {"행섭,양천"}
members.add('행섭'); // Set(2) {"행섭"}
members.add('스기따라'); // Set(3) {"행섭,양천,스기따라"}
members.add('힝카인'); // Set(4) {"행섭,양천,스기따라,힝카인"}
members.add('힝카인'); // Set(4) {"행섭,양천,스기따라,힝카인"}
members.add('힝카인'); // Set(4) {"행섭,양천,스기따라,힝카인"}
members.add('양천'); // Set(4) {"행섭,양천,스기따라,힝카인"}
members.add('힝카인'); // Set(4) {"행섭,양천,스기따라,힝카인"}

console.log(`-----------------------`);

const numbers = [1, 3, 4, 3, 3, 3, 2, 1, 1, 1, 5, 5, 3, 2, 1, 4];
const uniqNumbers = new Set(numbers);

console.log(uniqNumbers); // set(5) {1, 3, 4, 2, 5}
