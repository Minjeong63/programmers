function solution(phone_number) {
  return [...phone_number]
    .map((el, idx) => {
      if (idx < phone_number.length - 4) return "*";
      else return el;
    })
    .join("");
}
