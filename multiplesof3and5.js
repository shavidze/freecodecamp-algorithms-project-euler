function multiplesOf3and5(number) {
  // Good luck!
  let mp = new Array(number + 1).fill(false);
  for (let i = 1; i < number; i++) {
    if (!mp[i]) {
      if (i % 3 === 0) {
        for (let j = i; j < number; j += 3) {
          mp[j] = true;
        }
      }
      if (i % 5 === 0) {
        for (let j = i; j < number; j += 5) {
          mp[j] = true;
        }
      }
    }
  }
  let answer = 0;
  for (let i = 1; i < number; i++) {
    if (mp[i]) answer += i;
  }
  return answer;
}

console.log(multiplesOf3and5(1000));
