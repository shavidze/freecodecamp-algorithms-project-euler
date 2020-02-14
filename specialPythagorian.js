function specialPythagoreanTriplet(n) {
  let sumOfabc = n;
  // Good luck!
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n - i; j++) {
      for (let l = 1; l <= n - i - j; l++) {
        if (i * i + j * j === l * l && i + j + l === n) {
          return i * j * l;
        }
      }
    }
  }
  return 1;
}

specialPythagoreanTriplet(1000);
