// DOM 트리 접근하기

//document.querySelector로 접근
const myTag = document.querySelector('#content')
console.log(myTag);

//자식 요소 노드
console.log(myTag.children);

//자식 요소 노드 대괄호 표기법으로 요소 선택
console.log(myTag.children[1]);