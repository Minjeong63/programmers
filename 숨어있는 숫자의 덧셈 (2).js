function solution(my_string) {
  return my_string
    .replace(/[a-zA-Z]/g, ",")
    .split(",")
    .reduce((acc, cur) => acc + Number(cur), 0);
}
