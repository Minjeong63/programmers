function solution(s) {
  const arr = s.split(" ");
  return s
    .split(" ")
    .filter((el, idx) => arr[idx + 1] !== "Z" && el !== "Z")
    .reduce((acc, cur) => acc + Number(cur), 0);
}
