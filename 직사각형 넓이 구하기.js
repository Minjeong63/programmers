function solution(dots) {
  const arr = dots.sort();

  return Math.abs(arr[1][1] - arr[0][1]) * Math.abs(arr[2][0] - arr[1][0]);
}
