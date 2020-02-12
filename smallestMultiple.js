function smallestMult(n) {
  // Good luck!
  var gcd = (a, b) => {
    while (b) {
      a %= b;
      [a, b] = [b, a];
    }
    return a;
  };
  var allLcm = arr => {
    let ans = arr[0];
    for (let i = 1; i < arr.length; i++) {
      ans = (ans * arr[i]) / gcd(ans, arr[i]);
    }
    return ans;
  };
  let nums = new Array(n).fill(0).map((x, i) => {
    return i + 1;
  });
  console.log(nums);
  return allLcm(nums);
}

console.log(smallestMult(7));
