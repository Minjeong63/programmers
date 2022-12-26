function solution(num, k) {
  const arr = [...num.toString()]
    .map((el, index) => {
      if (el == k) return index;
      else {
        return "";
      }
    })
    .filter((el) => el !== "");
  return arr.length === 0 ? -1 : arr[0] + 1;
}
