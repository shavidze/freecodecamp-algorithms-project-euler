function largestPalindromeProduct(n) {
  // Good luck!
  var checkPalindrom = n => {
    let readIt = String(n);
    return (
      readIt ===
      readIt
        .split("")
        .reverse()
        .join("")
    );
  };

  var makeNum = n => {
    let answ = "";
    for (let i = 0; i < n; i++) {
      answ += "9";
    }
    return parseInt(answ);
  };

  let N = makeNum(n);
  let answer = 0;
  for (let i = N; i >= N - Math.pow(10, String(N).length - 1); i--) {
    for (let j = N; j >= N - Math.pow(10, String(N).length - 1); j--) {
      let maybe = i * j;
      if (checkPalindrom(maybe)) {
        answer = Math.max(answer, maybe);
      }
    }
  }

  return answer;
}

console.log(largestPalindromeProduct(4));
