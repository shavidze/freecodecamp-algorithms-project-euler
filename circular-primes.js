function circularPrimes(N) {
    var n = 100;
    let is_Primes = new Array(9999999).fill(true);
    var rotation = x => {
        let rem = x % 10;
        let digits = 0;
        let num = x;
        while (true) {
            num = Math.floor(num / 10);
            if (num === 0) break;
            digits++;
        }
        rem = rem * Math.pow(10, digits);
        x = Math.floor(x / 10);
        x += rem;
        return x;
    };
    var eras = () => {
        is_Primes[1] = is_Primes[0] = false;
        for (let i = 2; i < 9999999; i++) {
            if (is_Primes[i]) {
                for (let j = i + i; j <= 9999999; j += i) {
                    is_Primes[j] = false;
                }
            }
        }
    };
    let answer = 0;
    eras();
    for (let i = 2; i <= N; i++) {
        let len = String(i).length - 1;
        let rotated = i;
        let flag = 0;
        if (is_Primes[i]) {
            for (let j = 0; j < len; j++) {
                rotated = rotation(rotated);
                if (!is_Primes[rotated]) {
                    flag = 1; break;
                }
            }
            if (!flag) answer++;
        }
    }
    return answer;
}
circularPrimes(100);
