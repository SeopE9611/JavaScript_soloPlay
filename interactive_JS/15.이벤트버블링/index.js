// 이벤트 버블링 (Event Bubbling)
const content = document.querySelector("#content");
const title = document.querySelector("#title");
const list = document.querySelector("#list");
const items = document.querySelectorAll(".item");

content.addEventListener("click", function () {
  console.log("content Event");
});

title.addEventListener("click", function () {
  console.log("title Event");
});

list.addEventListener("click", function () {
  console.log("list Event");
});

for (let item of items) {
  item.addEventListener("click", function () {
    console.log("item Event");
  });
}
