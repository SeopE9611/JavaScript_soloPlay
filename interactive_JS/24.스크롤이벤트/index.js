// Scroll 이벤트
function printEvent(e) {
  console.log(e);
  console.log(window.scrollY);
}

window.addEventListener("scroll", printEvent);
