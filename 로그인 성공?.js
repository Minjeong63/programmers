function solution(id_pw, db) {
  let answer = [];
  for (let el of db) {
    if (el[0] === id_pw[0] && el[1] === id_pw[1]) answer.push("1");
    else if (el[0] === id_pw[0]) answer.push("2");
    else if (el[0] !== id_pw[0]) answer.push("3");
  }
  return answer.includes("1")
    ? "login"
    : answer.includes("2")
    ? "wrong pw"
    : "fail";
}
