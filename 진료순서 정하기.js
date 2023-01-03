function solution(emergency) {
  let answer = [];
  const sortArr = [...emergency].sort((a, b) => b - a);
  const arr = sortArr.map((el, idx) => [el, idx + 1]);

  for (let i = 0; i < emergency.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (emergency[i] === arr[j][0]) {
        answer.push(arr[j][1]);
        break;
      }
    }
  }
  return answer;
}
