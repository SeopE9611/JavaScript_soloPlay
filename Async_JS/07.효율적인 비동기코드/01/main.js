  // main.js
  async function printList() {
    for (let i = 638; i < 642 ; i++){
      const response = await fetch(`https://todo-api.fesp.shop/api/todolist/${i}`)
      const data = await response.json();
      console.log(data);
    }
  }
  printList()

  // for문을 풀어서 쓸경우
  async function printList() {
      const response = await fetch(`https://todo-api.fesp.shop/api/todolist/638`)
      const data = await response.json();
      console.log(data);

      const response = await fetch(`https://todo-api.fesp.shop/api/todolist/639`)
      const data = await response.json();
      console.log(data);

      const response = await fetch(`https://todo-api.fesp.shop/api/todolist/640`)
      const data = await response.json();
      console.log(data);
  }
  printList()