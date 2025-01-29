const avatarData = {
  hairType: 'short2',
  hairColor: 'brown',
  skin: 'tone200',
  clothes: 'hoodie',
  accessories: 'earbuds',
};

// https://learn.codeit.kr/api/avatars에 POST 리퀘스트를 보내고 위 데이터를 리퀘스트 바디에 포함해 주세요. 그리고 리스폰스로 돌아오는 결과를 출력.


const res = await fetch('https://learn.codeit.kr/api/avatars',{
  method: 'POST',
  body: JSON.stringify(avatarData),
  headers: {
    'Content-Type': 'application/json',
  }
})

const data = await res.json();
console.log(data);