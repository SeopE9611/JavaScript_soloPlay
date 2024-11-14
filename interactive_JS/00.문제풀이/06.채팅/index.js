const chatBox = document.querySelector("#chat-box");
const input = document.querySelector("#input");
const send = document.querySelector("#send");

function sendMyText() {
  const newMessage = input.value;
  if (newMessage) {
    const div = document.createElement("div");
    div.classList.add("bubble", "my-bubble");
    div.innerText = newMessage;
    chatBox.append(div);
  } else {
    alert("메시지를 입력하세요...");
  }

  input.value = "";
}

send.addEventListener("click", sendMyText);

// 1. enter 키로 메시지를 전송하고 나면 textarea 태그는 초기화 진행
// 2. shift+enter 일때는 줄바꿈 작동
// 3. keypress 타입으로 이벤트 핸들러 등록

// enter 키를 누를 때 sendMyText 함수를 호출하는 이벤트 핸들러를 만들었다.
// textarea 태그에 keypress 타입으로 이벤트 핸들러를 등록했다.
// textarea 태그에 커서를 두고 enter키를 누르면 sendMyText 함수가 호출된다.
// enter키로 메시지를 보내면 textarea 태그가 제대로 초기화가 된다.
// textarea 태그에 커서를 두고 shift+enter키를 누르면 줄바꿈이 된다.
//--------------------------------------------------------------

function sendMyTextByEnter(e) {
  // 1. 엔터키로 메시지 전송
  if (e.key === "Enter" && !e.shiftKey) {
    //2. shiftKey 프로퍼티 - 이벤트가 발생할 때 shift키를 눌렀는지를 불린 형태로 담고있음
    sendMyText();
    e.preventDefault(); //1. 브라우저의 기본동작으로써 textarea 태그에 줄바꿈되기 때문에 그것을 막음
  }
}

input.addEventListener("keypress", sendMyTextByEnter); // 3.엔터키로 메시지 전송할 때 keypress 이벤트 사용
