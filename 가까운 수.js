function solution(array, n) {
  const arr = array
    .map((el) => [el, Math.abs(el - n)])
    .sort((a, b) => a[1] - b[1]);
  if (arr[0][1] === arr[1][1]) return Math.min(arr[0][0], arr[1][0]);
  else return arr[0][0];
}
