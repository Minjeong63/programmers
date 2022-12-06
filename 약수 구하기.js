function solution(n) {
  let arr = [];
  for (let i = 1; i <= n; i++) {
    if (!(n % i)) arr.push(i);
  }
  return arr;
}
