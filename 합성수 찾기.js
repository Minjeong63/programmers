function solution(n) {
  let number = 0;
  if (n === 1 || n === 2 || n === 3) return 0;
  for (let i = 3; i <= n; i++) {
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        number++;
        break;
      }
    }
  }
  return number;
}
