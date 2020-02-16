function longestCollatzSequence(limit) {
    // Good luck!
    var dp = [];
    let chainLen = (x) => {
        if (dp[x] !== undefined && x !== 1) {
            return dp[x];
        }
        if (x === 1) return dp[1] = 1;
        return dp[x] = 1 + chainLen(x & 1 ? x * 3 + 1 : x / 2);
    }
    let answer = 0;
    let whatNumber;
    for (let i = limit; i >= 1; i--) {
        if (answer < chainLen(i)) {
            answer = chainLen(i);
            whatNumber = i;
        }
    }
    return whatNumber;
}

console.log(longestCollatzSequence(14));
