function solution(n) {
  let answer = 2;
  let result = n;
  while (result % 6) {
    result = n * answer;
    answer++;
  }
  return result / 6;
}
