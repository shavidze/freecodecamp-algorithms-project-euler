function nthPrime(n) {
  // Good luck!
  var checker = x => {
    if (x === 2) return true;
    if (x === 3) return true;
    for (let i = 2; i <= x / i; i++) {
      if (x % i === 0) return false;
    }
    return true;
  };
  let x = 2;
  let it = 0;
  let primes = [];
  while (true) {
    if (checker(x)) {
      primes.push(x);
    }
    x++;
    if (primes.length === n) break;
  }

  return primes[n - 1];
}

console.log(nthPrime(10001));
