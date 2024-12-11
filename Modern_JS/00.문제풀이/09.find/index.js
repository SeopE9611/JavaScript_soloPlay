const nameInput = document.querySelector('#user-name');
const phoneInput = document.querySelector('#phone-number');
const findBtn = document.querySelector('#find');

const data = [
  { userName: '행섭', phoneNumber: '01012341111', email: '행섭@naver.com' },
  { userName: '스기따라', phoneNumber: '01012342222', email: '스기따라@naver.com' },
  { userName: '양천', phoneNumber: '01012343333', email: '양천@naver.com' },
  { userName: '힝카인', phoneNumber: '01012344444', email: '힝카인@naver.com' },
  { userName: '찌듕', phoneNumber: '01012345555', email: '찌듕@naver.com' },
];

function findEmail() {
  const nameValue = nameInput.value;
  const phoneValue = phoneInput.value;

  // 여기에 코드를 작성하세요
  const user = data.find((el,i)=>{
    console.log(i);
    return nameValue === el.userName && phoneValue === el.phoneNumber

  })

  console.log(user);
  


  const message = user
    ? `${user.userName}님의 이메일은 ${user.email} 입니다.`
    : '이메일을 찾을 수 없습니다. 입력 정보를 다시 확인해 주세요.';

  alert(message);
}

findBtn.addEventListener('click', findEmail);