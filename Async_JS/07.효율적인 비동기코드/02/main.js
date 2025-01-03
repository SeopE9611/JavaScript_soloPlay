  // main.js
  async function printList(id) {
      const response = await fetch(`https://todo-api.fesp.shop/api/todolist/${id}`)
      const data = await response.json();
      console.log(data);
    }

  for (let i = 638; i < 642 ; i++){
  printList(i)
  }

    // for문을 풀어서 쓸경우
    async function printList(id) {
      const response = await fetch(`https://todo-api.fesp.shop/api/todolist/${id}`)
      const data = await response.json();
      console.log(data);
    }

  printList(638);
  printList(639);
  printList(640);
  printList(641);
