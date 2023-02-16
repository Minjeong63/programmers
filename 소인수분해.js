function solution(n) {
  let answer = [];
  for (let i = 2; i <= n; i++) {
    if (!(n % i)) {
      answer.push(i);
      n = n / i;
      i = 1;
    }

    if (i === n) break;
  }
  return [...new Set(answer)];
}
