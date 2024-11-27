// 여기에 코드를 작성하세요

function ignoreFirst(first, ...others) {
  for (list of others) {
    console.log(list);
  }
}

ignoreFirst("1세대", "2세대", "3세대");
ignoreFirst("곰팡이", "강아지", "고양이");
ignoreFirst(20, 9, 18, 19, 30, 34, 40);

// 또는
console.log("-----------------------");

function ignoreFirst(...first_rem) {
  first_rem.shift(); // shift 메소드로 첫 요소 제거 함

  for (el of first_rem) {
    console.log(el);
  }
}

ignoreFirst("1세대", "2세대", "3세대");
ignoreFirst("곰팡이", "강아지", "고양이");
ignoreFirst(20, 9, 18, 19, 30, 34, 40);
