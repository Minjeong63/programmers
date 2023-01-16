function solution(s) {
  return (s.length === 4 || s.length === 6) &&
    s.split("").sort().reverse()[0].charCodeAt(0) <= 57
    ? true
    : false;
}
