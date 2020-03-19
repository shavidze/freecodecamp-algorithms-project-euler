function sumFactorialDigits(n) {
  // Good luck!
  let logSums = 0;
  let multiply = (xvector, y) => {
    let carry = 0;
    let sz = xvector.length;
    for (let i = 0; i < sz; i++) {
      let res = carry + xvector[i] * y;
      xvector[i] = res % 10;
      carry = Math.floor(res / 10);
    }
    while (carry != 0) {
      xvector.push(carry % 10);
      carry = Math.floor(carry / 10);
    }
    return xvector;
  };
  let vc = [];
  vc[0] = 1;
  for (let i = 1; i <= n; i++) {
    vc = multiply(vc, i);
  }
  for (let i = 0; i < vc.length; i++) {
    logSums += vc[i];
  }
  return logSums;
}

console.log(sumFactorialDigits(100));
