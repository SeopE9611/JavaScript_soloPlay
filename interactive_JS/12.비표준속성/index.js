//비표준 속성 활용하기

// 선택자로 활용
const fields = document.querySelectorAll("[data-field]");
console.log(fields);

//값을 표시할 태그를 구분할 때 활용
const task = {
  title: "디스코드",
  name: "섭이",
  status: "",
};

for (let tag of fields) {
  //for..of 반복문을 활용하여 fields의 요소를 할당
  // const field = tag.getAttribute("field");
  const field = tag.dataset.field; //dataset 저장
  tag.textContent = task[field];
}

//스타일이나 데이터 변경에 활용
const btns = document.querySelectorAll(".btn");
for (let btn of btns) {
  // const status = btn.getAttribute("status");
  const status = btn.dataset.status; //dataset 저장
  btn.onclick = function () {
    fields[2].textContent = status;
    // fields[2].setAttribute("status", status);
    fields[2].dataset.status = status; //dataset 저장
  };
}
