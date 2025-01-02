// asyncFunction.js
export async function printList () {
  const response = await fetch('https://todo-api.fesp.shop/api/todolist');
  const data = await response.json()
  console.log(data);
}

// const printListArrow = async () => {
//   const response = await fetch('https://todo-api.fesp.shop/api/todolist');
//   const data = await response.json()
//   console.log(data);
// }