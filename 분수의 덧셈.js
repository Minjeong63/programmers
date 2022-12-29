function solution(denum1, num1, denum2, num2) {
  let answer = [];
  let arr = [];
  let num1Arr = [];
  let num2Arr = [];

  answer.push(denum1 * num2 + denum2 * num1, num1 * num2);

  for (let i = 1; i <= answer[0]; i++) {
    if (answer[0] % i === 0) num1Arr.push(i);
  }

  for (let i = 1; i <= answer[1]; i++) {
    if (answer[1] % i === 0) num2Arr.push(i);
  }

  num1Arr.map((el) =>
    num2Arr.map((el2) => {
      if (el === el2) arr.push(el);
    })
  );

  arr.sort((a, b) => b - a);

  return [answer[0] / arr[0], answer[1] / arr[0]];
}
