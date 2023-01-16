function solution(left, right) {
  let answer = 0;
  let count = 0;

  for (let i = left; i <= right; i++) {
    count = 0;
    for (let j = 1; j <= i; j++) {
      if (!(i % j)) count += 1;
      if (j === i) {
        count % 2 ? (answer -= i) : (answer += i);
      }
    }
  }
  return answer;
}
