// Map 생성
const introduce = new Map();

//set 메소드
introduce.set('title','문자열key');
introduce.set('2024',' 숫자형key');
introduce.set('true',' 불린형key');

//get 메소드
console.log(introduce.get('title')) //문자열key
console.log(introduce.get(2024)); // 숫자형key
console.log(introduce.get(true)); // 불린형key

//has 메소드
console.log(introduce.has('title')) // true
console.log(introduce.has('name')) // false

//size 프로퍼티
console.log(introduce.size) // 3

//delete 메소드
introduce.delete(true);
console.log(introduce.get(true)) // undefined
console.log(introduce.size); // 2

//clear 메소드
introduce.clear();
console.log(introduce.get(2024)); // undefined
console.log(introduce.size); // 0