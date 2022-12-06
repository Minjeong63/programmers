function solution(numbers, direction) {
  if (direction === "right") {
    const cutR = numbers.splice(numbers.length - 1, 1);
    numbers.splice(0, 0, cutR[0]);
    return numbers;
  } else {
    const cutL = numbers.splice(0, 1);
    numbers.splice(numbers.length, 0, cutL[0]);
    return numbers;
  }
}
