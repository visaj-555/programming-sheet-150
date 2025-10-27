function sumOfEven(n) {
  let sum = 0;
  for (let i = 1; i <= 2 * n; i++) {
    if (i % 2 === 0) sum += i;
  }
  return sum;
}

console.log(sumOfEven(4)); // 20

// Repeated
