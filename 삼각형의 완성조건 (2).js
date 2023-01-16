function solution(sides) {
  let answer = 0;
  for (
    let i = Math.abs(sides[0] - sides[1]) + 1;
    i < Math.abs(sides[0] + sides[1]);
    i++
  ) {
    answer += 1;
  }
  return answer;
}
