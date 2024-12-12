const data = [ 
  { company: 'KAKAO', month: 3 },
	{ company: 'MS', month: 12 },
	{ company: 'google', month: 10 },
  { company: 'NAVER', month: 6 },
  { company: 'Daum', month: 4 },
  { company: 'samsung', month: 3 },
	{ company: 'SKT', month: 17 },
];


const totalMonth = data.reduce((acc, el, i)=> {

  return acc + el.month
  
},0)

console.log(`month의 총합은 ${totalMonth}개월입니다.`);
