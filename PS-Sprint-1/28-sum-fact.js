function sumOfFactorial(n) {
  let factorial = 1;
  let sum = 0;

  for (let i = 1; i <= n; i++) {
    factorial *= i;
  }

  const arr = Array.from(String(factorial), Number);

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

console.log(sumOfFactorial(4));
