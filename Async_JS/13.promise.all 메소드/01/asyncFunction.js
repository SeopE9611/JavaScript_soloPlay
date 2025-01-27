// asyncFunction.js
export async function printList () {
  try{
    const response = await fetch('https://todo-api.fesp.shopppppppp/api/todolist');
    const data = await response.json()
    console.log(data);
  } catch (error) {
    console.log('에러가 발생했습니다.');
    // console.log(error);
    return;
  } finally {
    console.log('Finished');
  }
}