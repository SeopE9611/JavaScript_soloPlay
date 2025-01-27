  // main.js
    async function getList(id) {
    const response = await fetch(`https://todo-api.fesp.shop/api/todolist/${id}`)
    const data = await response.json();
    return data; // data를 반환
    }

    for (let i = 638; i < 642 ; i++){
        const List = await getList(i) // 함수 바깥에서 값을 받아오기 위해 await 사용
    }