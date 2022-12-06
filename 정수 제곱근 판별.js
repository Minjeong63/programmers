function solution(n) {
  return Math.sqrt(n).toString().includes(".")
    ? -1
    : Math.pow(Math.sqrt(n) + 1, 2);
}
