function fiboEvenSum(n) {
  // You can do it!
  let fibNums = new Array(n).fill(0);
  fibNums[1] = 1;
  fibNums[2] = 2;
  let answer = fibNums[2];
  for (let i = 3; fibNums[i - 1] < n; i++) {
    fibNums[i] = fibNums[i - 1] + fibNums[i - 2];
    if (!(fibNums[i] & 1)) {
      answer += fibNums[i];
    }
  }

  return answer;
}

console.log(fiboEvenSum(10));
