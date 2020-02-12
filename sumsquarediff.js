function sumSquareDifference(n) {
  // Good luck!

  const sumFn = (acc, curr) => acc + curr;
  const sumSq = (acc, curr) => acc + curr * curr;
  const summ = arr => {
    return arr.reduce(sumFn);
  };
  const summSq = arr => {
    return arr.reduce(sumSq);
  };
  let arr = new Array(n).fill(0).map((x, i) => {
    return i + 1;
  });
  let a = summ(arr);
  let b = summSq(arr);
  return a * a - b;
}

sumSquareDifference(10);
