const box1 = document.querySelector("#box1");
const box2 = document.querySelector("#box2");

let mouseoverCount = 0;
let mouseenterCount = 0;

box1.addEventListener("mouseover", function () {
  mouseoverCount++;
  const msg = `mouseover event count: ${mouseoverCount}`;
  box1.lastElementChild.textContent = msg;
});

box2.addEventListener("mouseenter", function () {
  mouseenterCount++;
  const msg = `mouseenter event count: ${mouseenterCount}`;
  box2.lastElementChild.textContent = msg;
});
