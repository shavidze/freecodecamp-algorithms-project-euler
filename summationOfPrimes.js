function primeSummation(n) {
  // Good luck!
  let answer = 0;

  var eras = () => {
    let is_Primes = new Array(n + 1).fill(true);

    is_Primes[1] = is_Primes[0] = false;
    for (let i = 2; i < n; i++) {
      if (is_Primes[i]) {
        answer += i;
        for (let j = i; j <= n; j += i) {
          is_Primes[j] = false;
        }
      }
    }
  };
  eras();
  return answer;
}

console.log(primeSummation(17));
