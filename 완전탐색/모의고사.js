function solution(answers) {
  let answer = [];
  let score = [0, 0, 0];
  let one = [1, 2, 3, 4, 5];
  let two = [2, 1, 2, 3, 2, 4, 2, 5];
  let three = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  for (let i = 0; i < answers.length; i++) {
    if (one[i % 5] === answers[i]) score[0]++;
    if (two[i % 8] === answers[i]) score[1]++;
    if (three[i % 10] === answers[i]) score[2]++;
  }
  let max = Math.max(...score);
  if (score[0] === max) answer.push(1);
  if (score[1] === max) answer.push(2);
  if (score[2] === max) answer.push(3);
  return answer;
}
