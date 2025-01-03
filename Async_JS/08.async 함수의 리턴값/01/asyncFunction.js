// asyncFunction.js
export async function List () {
  const response = await fetch('https://todo-api.fesp.shop/api/todolist');
  const data = await response.json()
  return data;
}