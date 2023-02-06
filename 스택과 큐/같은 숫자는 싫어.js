function solution(arr) {
  let answer = [];
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] !== arr[i + 1]) answer.push(arr[i]);
    if (
      i === arr.length - 2 &&
      arr[arr.length - 1] !== answer[answer.length - 1]
    )
      answer.push(arr[arr.length - 1]);
  }
  return answer;
}
