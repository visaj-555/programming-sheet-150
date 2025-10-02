function sumOfSeries(n) {
  let sum = 0;
  for (let i = 1; i < n; i++) {
    sum += 1 / i;
  }

  return sum + 1;
}

console.log(sumOfSeries(4));

// Example: Input: n = 4;
// Output: 2.083333;
