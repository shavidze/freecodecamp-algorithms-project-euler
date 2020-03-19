function sumFactorialDigits(n) {
  // Good luck!

  var mutliply = (x, y) => {
    let res = new Array(x.length + y.length + 1).fill(0);
    if (x.length === 0 || y.length === 0) return "0";
    let n1 = x.length;
    let n2 = y.length;
    let iy = 0;
    let ix = 0;
    for (let i = n1 - 1; i >= 0; i--) {
      let carry = 0;
      let a = parseInt(x[i]);
      iy = 0;
      for (let j = n2 - 1; j >= 0; j--) {
        let b = parseInt(y[j]);
        let sum = a * b + res[iy + ix] + carry;
        carry = Math.floor(sum / 10);
        res[ix + iy] = sum % 10;
        iy++;
      }
      if (carry > 0) {
        res[ix + iy] += carry;
      }
      ix++;
    }
    let i = res.length - 1;
    while (i >= 0 && res[i] === 0) {
      i--;
    }
    if (i === -1) {
      return "0";
    }
    let ans = "";
    while (i >= 0) {
      ans += String(res[i]);
      i--;
    }
    return ans;
  };

  let answer2 = "1";
  for (let i = 2; i <= n; i++) {
    answer2 = mutliply(String(i), answer2);
  }
  let digitsSums2 = 0;
  for (let i = 0; i < answer2.length; i++) {
    digitsSums2 += parseInt(answer2[i]);
  }
  return digitsSums2;
}

sumFactorialDigits(100);
