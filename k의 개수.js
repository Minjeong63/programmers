function solution(i, j, k) {
  let num = 0;
  for (let p = i; p <= j; p++) {
    if (p.toString().includes(k)) {
      [...p.toString()].map((el) => {
        if (Number(el) === k) num++;
      });
    }
  }
  return num;
}
