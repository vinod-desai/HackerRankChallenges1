// https://www.hackerrank.com/challenges/counting-valleys/

// Complete the countingValleys function below.
function countingValleys(n, s) {
  let step = 0,
    lvl = 0;
  for (let i = 0; i < n; i++) {
    if (s[i] === "D") {
      step--;
    } else {
      step++;
    }
    if (s[i] === "U" && step === 0) {
      lvl++;
    }
  }

  return lvl;
}
