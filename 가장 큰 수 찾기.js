function solution(array) {
  return array.map((el, index) => [el, index]).sort((a, b) => a[0] - b[0])[
    array.length - 1
  ];
}
console.log(solution([1, 8, 3]));
