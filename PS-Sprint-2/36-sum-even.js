function sumOfEven(n) {
  let sum = 0;
  for (let i = 1; i <= 2 * n; i++) {
    if (i % 2 === 0) sum += i;
  }
  return sum;
}

console.log(sumOfEven(4)); // 20

// Input: N = 4
// Output: 20
// Explanation: The first 4 even numbers are 2, 4, 6, 8, and their sum is 20.
