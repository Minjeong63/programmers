function solution(numbers) {
  const arr = numbers.sort((a, b) => a - b);
  if (arr.length === 2) return arr[0] * arr[1];
  else {
    return arr[0] * arr[1] > arr[arr.length - 2] * arr[arr.length - 1]
      ? arr[0] * arr[1]
      : arr[arr.length - 2] * arr[arr.length - 1];
  }
}
