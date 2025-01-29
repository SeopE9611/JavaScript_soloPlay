/* https://learn.codeit.kr/api/avatars에 GET 리퀘스트를 보내세요. */
const res1 = await fetch('https://learn.codeit.kr/api/avatars')// 여기에 코드를 작성하세요.
const data = await res1.json();
console.log(data)

/* https://learn.codeit.kr/api/avatars에 GET 리퀘스트를 보내세요. 쿼리 파라미터로 offset을 5, limit을 10으로 설정하세요. */
const url = new URL('https://learn.codeit.kr/api/avatars');
url.searchParams.append('offset', '5');
url.searchParams.append('limit', '10');

const res2 = await fetch(url)// 여기에 코드를 작성하세요.
const data2 = await res2.json();
console.log(data2)



/* https://learn.codeit.kr/api/avatars/:id에 GET 리퀘스트를 보내세요. id를 7로 설정하세요. */
const res3 = await fetch('https://learn.codeit.kr/api/avatars/5')// 여기에 코드를 작성하세요.
const data3 = await res3.json();
console.log(data3)