function solution(s) {
  return s.includes("+")
    ? Number(s.slice(1, s.length))
    : Number(s.slice(0, s.length));
}
