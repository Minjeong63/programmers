function solution(s1, s2) {
  return s1.filter((el) => {
    for (let i = 0; i < s2.length; i++) {
      if (el === s2[i]) return el;
    }
  }).length;
}
console.log(solution(["a", "b", "c"], ["com", "b", "d", "p", "c"]));
