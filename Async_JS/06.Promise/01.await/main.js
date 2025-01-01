// main.js
const response = await fetch('https://todo-api.fesp.shop/api/todolist');
const data = await response.json()
console.log(data);
