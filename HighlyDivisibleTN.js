function divisibleTriangleNumber(n) {
    // Good luck!
    var numberOfDivisors = (x) => {
        let ans = 1;
        for (let i = 2; i * i <= x; i++) {
            let powerOf = 0;
            while (x % i === 0) {
                powerOf++;
                x /= i;
            }
            ans *= (powerOf + 1);
        }
        if (x > 1) {
            ans *= 2;
        }
        return ans;
    }
    var N = n;
    let dp = new Array();
    dp[1] = 1;
    if (n === 1) return 1;
    let i = 2;
    while (true) {
        dp[i] = i + dp[i - 1];
        if (numberOfDivisors(dp[i]) > n) {
            return dp[i];
        }
        i++;
    }

    return 1;
}

console.log(divisibleTriangleNumber(5));
