function solution(sizes) {
  let horizontal = Number.MIN_SAFE_INTEGER;
  let length = Number.MIN_SAFE_INTEGER;
  let arr = sizes.map((el) => {
    if (el[0] < el[1]) {
      horizontal = Math.max(el[1], horizontal);
      length = Math.max(el[0], length);
    } else {
      horizontal = Math.max(el[0], horizontal);
      length = Math.max(el[1], length);
    }
  });
  return horizontal * length;
}
