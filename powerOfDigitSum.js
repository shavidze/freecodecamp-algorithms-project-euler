function powerDigitSum(exponent) {
  // Good luck!
  let divs = new Array(exponent).fill(-1);

  var add = (x, y) => {

    x = String(x).split("").reverse().join("");
    y = String(y).split("").reverse().join("");

    if (x.length > y.length) {
      [x, y] = [y, x];
    }

    let n1 = x.length;
    let n2 = y.length;
    let carry = 0;
    let str = ""
    for (let i = 0; i < n1; i++) {
      let sum = parseInt(x[i]) + parseInt(y[i]) + carry;
      str = str.concat(String(Math.floor(sum % 10)));
      carry = Math.floor(sum / 10);
    }

    for (let i = n1; i < n2; i++) {
      let sum = parseInt(y[i]) + carry;
      str = str.concat(String(Math.floor(sum % 10)));
      carry = Math.floor(sum / 10);
    }
    if (carry) {
      str = str.concat(String(carry));
    }
    return str.split("").reverse().join("");
  };
  let answer = "0";
  for (let i = 1; i <= exponent; i++) {
    if (i === 1) {
      answer = "2";
      continue;
    }
    answer = add(answer, answer);
  }
  let sm = 0;
  for (let i = 0; i < answer.length; i++) {
    sm += parseInt(answer[i]);
  }
  return sm;
}

console.log(powerDigitSum(15));
