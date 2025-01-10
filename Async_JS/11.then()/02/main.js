// main.js
async function printList () {
    const response = await fetch('https://todo-api.fesp.shop/api/todolist');
    const data = await response.json()
    console.log(data);
}

// then()
fetch('https://todo-api.fesp.shop/api/todolist')
    .then((response)=> response.json())
    .then((data)=> console.log(data));

    console.log('Task 2');
    console.log('Task 3');
    
    