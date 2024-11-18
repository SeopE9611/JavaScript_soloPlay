// Scroll 이벤트

let lastScrollY = 0;

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

  if (window.scrollY > lastScrollY) {
    // 스크롤 방향이 아래쪽일 때
    nav.classList.add("lift-up");
  } else {
    //스크롤 방향이 위쪽일 떄
    nav.classList.remove("lift-up");
  }

  lastScrollY = window.scrollY; // 마지막 스크롤 y의 위치를 다시 재할당
}

window.addEventListener("scroll", printEvent);
