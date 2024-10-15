// HTML 속성 (HTML attribute)
const tomorrow = document.querySelector('#tomorrow');
const item = tomorrow.firstElementChild;
const link = item.firstElementChild;


//elem.getAttribute('속성') - 속성에 접근하기
console.log(tomorrow.getAttribute('href'));
console.log(item.getAttribute('class'));

console.log('-----------------------------------------');

//elem.setAttribute('속성','값') - 속성 추가(수정)하기
tomorrow.setAttribute('class', 'list') // 추가
link.setAttribute('href', 'https://www.naver.com') // 수정

console.log('-----------------------------------------');

//elem.removeAttribute('속성') - 속성 제거하기
tomorrow.removeAttribute('hReF')
tomorrow.removeAttribute('ClAsS')

// // id 속성
// console.log(tomorrow);
// console.log(tomorrow.id);

// // class 속성
// console.log(item);
// console.log(item.className);

// // href 속성
// console.log(link);
// console.log(link.href);
// console.log(tomorrow.href);



