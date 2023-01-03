function solution(array) {
  let answer = 0;
  array
    .join("")
    .split("")
    .map((el) => {
      if (el == 7) answer += 1;
    });
  return answer;
}
