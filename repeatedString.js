// https://www.hackerrank.com/challenges/repeated-string/

// Complete the repeatedString function below.
function repeatedString(s, n) {
  /* const strLen = s.length;
  let str = s,
    count = 0,
    ;
  if (strLen === 1 && s === "a") {
    return n;
  }
  for (let i = strLen; i <= n; i = i + strLen) {
    str += s;
  }
  // console.log(str);
  str = str.substring(0, n).split("");
  // console.log(str);
  for (let i = 0; i < n; i++) {
    if (str[i] === "a") {
      count++;
    }
  }
  return count; */

  const counta = str => str.split("").filter(c => c == "a").length;

  const d = Math.floor(n / s.length);
  const r = n - s.length * d;
  return d * counta(s) + counta(s.substr(0, r));
}

console.log(repeatedString("aba", 10));
//console.log(repeatedString(a, 100000));
