function fibonacci(n) {
  if (n <= 1) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

function displayFibonacciSequence(n) {
  let result = "";
  for (let i = 0; i < n; i++) {
    result += fibonacci(i) + " ";
  }
  console.log(result);
}

displayFibonacciSequence(5);
