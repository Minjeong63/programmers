function solution(array) {
  if (array.length === 1) return array[0];
  let arr = [...new Set(array)].map((el) => [el, 0]);
  array.map((el) =>
    arr.map((num, idx) => {
      if (el === num[0]) arr[idx][1] += 1;
    })
  );
  arr.sort((a, b) => b[1] - a[1]);
  if (arr.length === 1) return arr[0][0];
  else if (arr[0][1] === arr[1][1]) return -1;
  else return arr[0][0];
}
