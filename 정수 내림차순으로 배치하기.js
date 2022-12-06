function solution(n) {
  return Number(
    [...n.toString()].sort((a, b) => Number(b) - Number(a)).join("")
  );
}
