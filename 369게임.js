function solution(order) {
  let arr = [];
  [...order.toString()].map(
    (el) => (el == 3 || el == 6 || el == 9) && arr.push(el)
  );
  return arr.length;
}
