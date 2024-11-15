const input = document.querySelector("#input");

function checker() {
  const words = document.querySelectorAll(".word");
  if (words.length === 0) {
    alert("Success");
    if (confirm("retry?")) {
      window.location.reload();
    }
  }
}

// 1. 입력값과 일치하는 단어를 가진 요소가 있으면 그 요소를 삭제해야 한다.
// 2. 이벤트 핸들러가 호출되면 input 태그는 매번 초기화되어야 한다.
// 3. 단어를 삭제했다면 checker 함수가 호출되어야 한다.
// 4. 이벤트 핸들러 등록
// 작성하기 ▼

function removeWord() {
  //1. 입력값과 일치하는 단어를 가진 요소가 있으면 그 요소를 삭제하기.
  //input 태그에 입력된 단어를 담고 있는 요소 노드를 찾아야한다.
  //initializer.js에 dataset.word = word가 있다. 즉 각 단어들은 data-word라는 속성을 가지고 값은 그 단어를 단고 있다.
  //또한 input 태그를 선택해서 value 프로퍼티에 접근하면 해당 태그에 입력된 값을 얻어낼 수 있기에 이 값으로 [속성='값'] 형태로 css 선택자를 활용
  // 즉 다음과 같이 input 태그에 단어를 담고있는 요소노드를 찾는다.
  const word = document.querySelector(`[data-word="${input.value}"]`);
  // word.remove(); //remove 메소드로 삭제가능하지만 오타로 인해 화면에 존재하지 않는 단어를 입력했을 때 word 부분이 null이 될 가능성이 있다.
  if (word) {
    // null이 될 가능성을 대비해 if문을 통해서 word가 truthy한 값을 가질때 remove 메소드를 호출하게 수정
    word.remove();
    //3. 단어를 삭제했다면 checker 함수 호출
    checker();
  }
  //2. 이벤트 핸들러가 호출되면 input 태그는 매번 초기화되어야한다.
  // input 태그의 value 프로퍼티에 빈 문자열을 할당
  input.value = "";
}

// 4. 이벤트 핸들러 등록하기
// input과 change 타입중 input은 값이 입력되는 순간마다 발생하고 change는 입력된 값이 바뀌는 순간, 또는 입력이 완료된 순간 발생
// input 태그가 항상 초기화되어야하니 input 타입은 사용X
// text 타입의 input 태그는 엔터키를 누르는것으로 change 이벤트가 발생하기에 사용에 적합
input.addEventListener("change", removeWord);
