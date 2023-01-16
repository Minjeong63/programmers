function solution(arr, divisor) {
  const filterArr = arr.filter((el) => el % divisor === 0);
  if (filterArr.length === 0) return [-1];
  else return filterArr.sort((a, b) => a - b);
}
