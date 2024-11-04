//비표준 속성 활용하기

// 선택자로 활용
const fields = document.querySelectorAll("[field]");
console.log(fields);

//값을 표시할 태그를 구분할 때 활용
const task = {
  title: "디스코드",
  name: "섭이",
  status: "",
};

for (let tag of fields) {
  //for..of 반복문을 활용하여 fields의 요소를 할당
  const field = tag.getAttribute("field");
  tag.textContent = task[field];
}
