function solution(bin1, bin2) {
  let sum = 0;
  let answer = "";

  bin1
    .split("")
    .reverse()
    .map((el, idx) => {
      if (el == 1) sum += Math.pow(2, idx);
    });

  bin2
    .split("")
    .reverse()
    .map((el, idx) => {
      if (el == 1) sum += Math.pow(2, idx);
    });

  while (sum >= 1) {
    answer += sum % 2;
    sum = Math.floor(sum / 2);
  }

  return answer === "" ? "0" : [...answer].reverse().join("");
}
