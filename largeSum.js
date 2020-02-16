function largeSum(arr) {
    // Good luck!
    let X = 0;
    for (let i = 0; i < arr.length; i++) {
        X += parseInt(arr[i]);
    }
    let ans = parseInt(String(X).substr(0, 11).replace(".", ""));
    return ans;
}

// only change code above this line

const testNums = [
    '37107287533902102798797998220837590246510135740250',
    '46376937677490009712648124896970078050417018260538'
];
largeSum(testNums);
