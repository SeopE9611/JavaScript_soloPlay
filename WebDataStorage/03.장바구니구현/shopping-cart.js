// 상품 이름을 변환하기 위한 사전(Dictionary)
const dictionary = {
  apple: '사과',
  orange: '오렌지',
  banana: '바나나',
};

/**
 * Step 1: 장바구니 데이터를 세션 스토리지에서 가져오기
 */
function getCartItems() {
  return JSON.parse(sessionStorage.getItem('cartItems')) || {};
}

/**
 * Step 2: HTML 리스트에 상품 추가하는 함수
 */
function addItemToList(name, count) {
  const cartItemList = document.getElementById('cart-item-list'); // 리스트 가져오기
  const item = document.createElement('li'); // 새로운 리스트 아이템 생성
  item.textContent = `${dictionary[name]}: ${count}개`; // 상품명 + 개수 표시
  cartItemList.appendChild(item); // 리스트에 추가
}

/**
 * Step 3: 장바구니 상품 목록을 화면에 표시하는 함수
 */
function createCartItemList() {
  const cartItems = getCartItems();
  for (const [key, value] of Object.entries(cartItems)) {
    addItemToList(key, value);
  }
}

/**
 * Step 4: "주문하기" 버튼 클릭 시 실행되는 함수
 */
function handleOrderButtonClick() {
  alert('주문이 완료되었습니다!');
  sessionStorage.removeItem('cartItems'); // 장바구니 데이터 삭제
  window.location.href = './index.html'; // 메인 페이지로 이동
}

/**
 * Step 5: 페이지 로드 시 장바구니 목록 표시 (초기화 함수)
 */
function setInitialValues() {
  createCartItemList();
}

/**
 * Step 6: 이벤트 리스너 설정
 */
function setEventListeners() {
  document.querySelector('#order-btn').addEventListener('click', handleOrderButtonClick);
}

// 페이지 로드 시 실행
setInitialValues();
setEventListeners();
