function solution(numbers) {
  let answer = 0;
  let arr = numbers.split("");
  let permutationsArr = [];
  for (let i = 1; i <= numbers.length; i++) {
    if (i === 1)
      permutationsArr.push(...getPermutations(arr, i).map((el) => el[0]));
    else
      permutationsArr.push(...getPermutations(arr, i).map((el) => el.join("")));
  }
  const finalArr = [...new Set(permutationsArr.map((el) => Number(el)))];

  for (let x of finalArr) {
    if (isPrime(x)) answer++;
  }
  return answer;
}

function isPrime(n) {
  if (n === 0 || n === 1) return false;
  for (let i = 2; i < n; i++) {
    if (n % i === 0) return false;
  }
  return true;
}

const getPermutations = (arr, selectNumber) => {
  const results = [];
  if (selectNumber === 1) return arr.map((el) => el);

  arr.forEach((element, index, arr) => {
    const rest = [...arr.slice(0, index), ...arr.slice(index + 1)];
    const permutations = getPermutations(rest, selectNumber - 1);
    const attatched = permutations.map((el) => [element, ...el]);
    results.push(...attatched);
  });

  return results;
};
