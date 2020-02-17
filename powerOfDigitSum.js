function powerDigitSum(exponent) {
  // Good luck!
  let divs = new Array(exponent).fill(-1);
  var add = (x, y) => {
    if (x.length > y.length) {
      [x, y] = [y, x];
    }
    let n1 = x.length;
    let n2 = y.length;
    x = x.reverse();
  };
  numberOfDivisors(exponent);
  for (let x of divs) {
    if (x === -1) continue;
    console.log(x);
  }
  let sumOfDigits = 0;

  return sumOfDigits;
}

console.log(powerDigitSum(128));
powerDigitSum(15);
