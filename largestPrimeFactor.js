function largestPrimeFactor(number) {
  // Good luck!
  let factor = 2;
  while (number > 1) {
    while (number % factor == 0) {
      number /= factor;
    }
    factor += 1;
  }
  return factor - 1;
}

console.log(largestPrimeFactor(600851475143));
