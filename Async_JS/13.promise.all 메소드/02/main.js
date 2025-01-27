  // main.js
    async function getList(id) {
    const response = await fetch(`https://todo-api.fesp.shop/api/todolist/${id}`)
    const data = await response.json();
    return data; // data를 반환
    }

    const promise = []; // promise 배열 생성

    for (let i = 638; i < 642 ; i++){
      promise.push(getList(i)) // promise 배열에 data를 넣어줌
    }
    Promise.all(promise); // promise.all로 promise 배열을 실행