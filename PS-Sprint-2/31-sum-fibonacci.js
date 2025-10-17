function sumOfFibonacciSeries(n) {
  if (n <= 0) return 0;

  let fib = [0, 1];
  let sum = 1;

  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
    sum += fib[i];
  }

  return sum;
}

console.log(sumOfFibonacciSeries(5));
