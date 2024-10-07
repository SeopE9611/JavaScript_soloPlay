// id로 태그 선택하기
const myTag = document.getElementById('btns')
console.log(myTag);

console.log('-------------------------------');


//class 태그 선택하기
const myTags = document.getElementsByClassName('seopE')
console.log(myTags);

console.log(myTags[0]); //myTags index 접근
console.log(myTags.length); //myTags length 프로퍼티 활용
for(let tag of myTags) { //myTags for...of 문으로 활용
    console.log(tag);
}




