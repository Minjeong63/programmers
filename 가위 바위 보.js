function solution(rsp) {
  let string = [];
  for (let i of rsp) {
    i === "2"
      ? string.push("0")
      : i === "0"
      ? string.push("5")
      : string.push("2");
  }
  return string.join("");
}
