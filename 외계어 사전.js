function solution(spell, dic) {
  const arr = dic
    .map((element) => [...new Set(element)].sort().join(""))
    .filter((el) => el.length === spell.length);

  if (arr.length === 0) return 2;
  else {
    const word = spell.sort().join("");
    return arr.filter((el) => el === word).length ? 1 : 2;
  }
}
