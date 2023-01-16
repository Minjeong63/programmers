function solution(price, money, count) {
  let payPrice = 0;
  for (let i = 1; i <= count; i++) {
    payPrice += price * i;
  }
  return money - payPrice >= 0 ? 0 : Math.abs(money - payPrice);
}
