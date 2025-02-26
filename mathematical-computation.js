// Iterative Approach
function factorialIterative(n) {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

// Recursive Approach
function factorialRecursive(n) {
  return n === 0 ? 1 : n * factorialRecursive(n - 1);
}

console.log(factorialIterative(5));
console.log(factorialRecursive(5));

function sumOfDigits(num) {
  let sum = 0;
  let i = num;

  while (i > 0) {
    let lastDigit = i % 10;
    sum += lastDigit;
    i = (i - lastDigit) / 10;
  }

  return sum;
}

console.log(sumOfDigits(123));
console.log(sumOfDigits(987));

function power(base, exponent) {
  let result = 1;

  for (let i = 0; i < exponent; i++) {
    result *= base;
  }

  return result;
}

console.log(power(2, 5));
console.log(power(3, 3));
