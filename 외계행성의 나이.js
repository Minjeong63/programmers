function solution(age) {
  return [...age.toString()].reduce(
    (acc, cur) => acc + String.fromCharCode(Number(cur) + 97),
    ""
  );
}
