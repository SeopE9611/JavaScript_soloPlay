function printMembers(...members) {
  for (const member of members) {
    console.log(member);
  }
}

try {
  printMembers("행섭", "섭이", "쑹빵");
} catch (err) {
  alert("에러가 발생했습니다!");
  console.error(err);
} finally {
  const end = new Date();
  const msg = `코드 실행을 완료한 시각은 ${end.toLocaleString()}입니다.`;
  console.log(msg);
}
