// 장바구니 개수를 표시할 요소 가져오기
const totalItemCountInCartText = document.querySelector('#total-item-count-in-cart');

/**
 * Step 1: 장바구니 데이터를 세션 스토리지에서 가져오기
 * 세션 스토리지에서 'cartItems' 키에 저장된 데이터를 불러오고, 없으면 빈 객체 {}를 반환.
 */
function getCartItems() {
  return JSON.parse(sessionStorage.getItem('cartItems')) || {};
}

/**
 * Step 2: 장바구니 데이터를 세션 스토리지에 저장하기
 * JavaScript 객체를 JSON 문자열로 변환하여 'cartItems' 키로 저장.
 */
function setCartItems(cartItems) {
  sessionStorage.setItem('cartItems', JSON.stringify(cartItems));
}

/**
 * Step 3: 장바구니 총 개수 계산하기
 * 장바구니에 담긴 모든 상품의 총 개수를 계산하여 반환.
 */
function getTotalItemCount() {
  const cartItems = getCartItems();
  let totalItemCount = 0;
  
  for (const itemCount of Object.values(cartItems)) {
    totalItemCount += itemCount;
  }
  
  return totalItemCount;
}

/**
 * Step 4: 페이지 로드 시 장바구니 개수 업데이트
 * 장바구니 개수를 세션 스토리지에서 가져와 화면에 표시.
 */
function setInitialValues() {
  totalItemCountInCartText.innerHTML = getTotalItemCount();
}

/**
 * Step 5: "담기" 버튼 클릭 시 상품을 장바구니에 추가하는 함수
 */
function handleAddClick(button) {
  const itemName = button.dataset['itemName']; // 버튼에서 상품 이름 가져오기
  const cartItems = getCartItems(); // 현재 장바구니 데이터 불러오기

  // 해당 상품의 개수 증가
  cartItems[itemName] = (cartItems[itemName] || 0) + 1;

  // 업데이트된 장바구니 데이터를 세션 스토리지에 저장
  setCartItems(cartItems);

  // 장바구니 개수 업데이트
  totalItemCountInCartText.innerHTML = getTotalItemCount();
}

/**
 *  Step 6: "장바구니로 가기" 버튼 클릭 시 페이지 이동
 */
function handleCartClick(e) {
  e.preventDefault();
  const totalItemCount = getTotalItemCount();

  // 장바구니가 비어 있으면 empty-shopping-cart.html로 이동, 아니면 shopping-cart.html로 이동
  window.location.href = totalItemCount > 0 ? './shopping-cart.html' : './empty-shopping-cart.html';
}

/**
 * Step 7: 이벤트 리스너 설정
 */
function setEventListeners() {
  // "담기" 버튼 클릭 이벤트 등록
  document.querySelectorAll('.add-to-cart-btn').forEach((button) =>
    button.addEventListener('click', () => handleAddClick(button))
  );

  // "장바구니로 가기" 버튼 클릭 이벤트 등록
  document.querySelector('#go-to-shopping-cart').addEventListener('click', handleCartClick);
}

// 페이지 로드 시 실행
setInitialValues();
setEventListeners();
