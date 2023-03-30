function solution(brown, yellow) {
  let answer = [0, 0];
  let sum = brown + yellow;
  for (let i = 1; i <= sum; i++) {
    if (sum % i === 0) {
      if (i * 2 + (sum / i - 2) * 2 === brown) {
        answer[0] = i;
        answer[1] = sum / i;
      }
    }
  }
  return answer;
}
