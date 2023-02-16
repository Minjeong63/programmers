function solution(my_string) {
  const arr = my_string.split(" ");
  let sumArr = [arr[0]];

  for (let i = 1; i <= arr.length - 1; i += 2) {
    sumArr.push(arr[i] + [arr[i + 1]]);
  }
  return sumArr.reduce((acc, cur) => acc + +cur, 0);
}
