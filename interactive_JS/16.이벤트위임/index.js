// 이벤트 위임 (Event Delegation)
const list = document.querySelector("#list");

for (let item of list.children) {
  item.addEventListener("click", function (e) {
    e.target.classList.toggle("done");
  });
}
