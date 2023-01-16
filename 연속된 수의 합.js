function solution(num, total) {
  let arr = [];
  for (let i = 0; i < num; i++) {
    if (num % 2) arr.push(total / num - Math.floor(num / 2) + i);
    else arr.push(Math.floor(total / num) - (num / 2 - 1) + i);
  }
  return arr;
}
