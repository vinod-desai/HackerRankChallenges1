// https://www.hackerrank.com/challenges/sock-merchant/

// Complete the sockMerchant function below.
function sockMerchant(n, ar) {
  let count = 0;
  let set1 = new Set();

  for (let i = 0; i < n; i++) {
    if (set1.has(ar[i])) {
      count++;
      set1.delete(ar[i]);
    } else {
      set1.add(ar[i]);
    }
  }

  return count;
}
