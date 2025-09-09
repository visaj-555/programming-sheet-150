function fibonacciSeries(n) {
  let fib = [0, 1];
  let i = 2;
  while (i < n) {
    fib[i] = fib[i - 1] + fib[i - 2];
    i++;
  }
  return fib.slice(0, n);
}
console.log(fibonacciSeries(10));
