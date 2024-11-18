// Scroll 이벤트
function printEvent(e) {
  console.log(window.scrollY);

  const standard = 30;

  const nav = document.querySelector("#nav");
  const toTop = document.querySelector("#to-top");

  if (window.scrollY > standard) {
    // 만약 스크롤 30px을 넘을 떄
    nav.classList.add("shadow"); // nav요소 노드에 shadow 클래스 적용
    toTop.classList.add("show"); // toTop요소 노드에 show 클래스 적용
  } else {
    // 스크롤이 30px을 넘지 않을 때
    nav.classList.remove("shadow"); // nav요소 노드에 shadow 클래스 삭제
    toTop.classList.remove("show"); // toTop요소 노드에 show 클래스 삭제
  }
}

window.addEventListener("scroll", printEvent);
