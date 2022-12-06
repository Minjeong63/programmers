function solution(cipher, code) {
  return [...cipher]
    .map((el, index) => (index + 1) % code === 0 && el)
    .filter((item) => item !== false)
    .join("");
}
