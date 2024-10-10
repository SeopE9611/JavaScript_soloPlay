//요소 노드 주요 프로퍼티
const myTag = document.querySelector('#list-1')

//innerHTML
console.log(myTag.innerHTML);
// myTag.innerHTML = '<li>Exotic</li>'
// myTag.innerHTML += '<li>Exotic</li>' //할당 연산자 사용 

//outerHTML
console.log(myTag.outerHTML); 
myTag.outerHTML = '<ul id ="new-list"><li>Exotic</li></ul>' 