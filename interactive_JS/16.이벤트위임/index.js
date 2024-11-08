// 이벤트 위임 (Event Delegation)
const list = document.querySelector("#list");

// for (let item of list.children) {
//   item.addEventListener("click", function (e) {
//     e.target.classList.toggle("done");
//   });
// }

// list.addEventListener("click", function (e) {
//   e.target.classList.toggle("done");
// });

list.addEventListener("click", function (e) {
  //if (e.target.tagName === 'li')
  if (e.target.classList.contains("item")) {
    e.target.classList.toggle("done");
  }
});

//새로운 아이템 추가
const li = document.createElement("li");
li.classList.add("item");
li.textContent = "빨래하기";
list.append(li);
