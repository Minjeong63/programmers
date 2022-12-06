function solution(my_string) {
  my_string;
  return [...my_string]
    .map((el) => {
      if (el === el.toUpperCase()) return el.toLowerCase();
      else return el.toUpperCase();
    })
    .join("");
}
