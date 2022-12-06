function solution(s) {
  const pArr = [...s].filter((el) => el === "p" || el === "P");
  const yArr = [...s].filter((el) => el === "y" || el === "Y");
  return pArr.length === yArr.length ? true : false;
}
console.log("xPxPdPbP".split("P"));
