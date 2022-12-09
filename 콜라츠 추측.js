function solution(num) {
  if (num === 1) return 0;
  let answer = [num, 0];

  for (let i = 0; i < 500; i++) {
    if (answer[0] === 1) break;
    else if (!(answer[0] % 2)) answer = [answer[0] / 2, answer[1] + 1];
    else if (answer[0] % 2) answer = [answer[0] * 3 + 1, answer[1] + 1];
  }
  if (answer[0] !== 1) return -1;
  return answer[1];
}
