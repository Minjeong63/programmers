function solution(s) {
  let answer = "";
  const unique = [...new Set([...s])];
  for (let i = 0; i < unique.length; i++) {
    if (s.split(unique[i]).length === 2) answer += unique[i];
  }
  return [...answer].sort().join("");
}
