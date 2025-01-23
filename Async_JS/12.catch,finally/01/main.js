// main
fetch('https://todo-api.fesp.shoaap/api/todolist')
    .then((response)=> response.json())
    .then((data)=> console.log(data))
    .catch((error)=> console.log('error'))
    .finally(()=> console.log('finished'));

    console.log('Task 2');
    console.log('Task 3');
    