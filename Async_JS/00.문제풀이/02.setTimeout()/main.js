function sayHello(name) {
  console.log(`Hello ${name}!`);
}

console.log('시작');

setTimeout(()=> {
  sayHello('섭이')
},2000)

console.log('끝');
