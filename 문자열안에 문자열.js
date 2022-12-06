function solution(str1, str2) {
  const last = str1.length - str2.length;
  for (let i = 0; i <= last; i++) {
    console.log(str1.slice(i, str2.length + i));
    if (str1.slice(i, str2.length + i) === str2) return 1;
    if (i === last && str1.slice(last, str2.length + i) !== str2) return 2;
  }
}
