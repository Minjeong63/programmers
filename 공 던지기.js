function solution(numbers, k) {
  if (numbers.length >= 2 * k - 1) return numbers[2 * (k - 1)];
  return numbers[((2 * k - 1) % numbers.length) - 1];
}
