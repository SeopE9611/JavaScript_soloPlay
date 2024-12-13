/*
// 객체 출력
const data = {
  name: "섭이",
  email: "SeopE@naver.com",
  address:"서울시 강서구"
}

console.log(data['name']);
console.log(data['email']);
console.log(data['address']);
*/

// forEach 메소드 활용하여 객체 출력
const data = {
  name: "섭이",
  email: "SeopE@naver.com",
  address:"서울시 강서구"
}

const keys = ['name', 'email', 'address']

keys.forEach((key)=> {
  console.log(data[key]);
  
})