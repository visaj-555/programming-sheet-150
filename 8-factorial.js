// EASY APPROACH

function factorial(n) {
  let result = 1;

  for (let i = n; i >= 1; i--) {
    result *= i; // Multiply instead of adding
  }

  return result;
}

let number = 5;
console.log("Factorial of", number, "is:", factorial(number));

// RECURSIVE APPROACH
function factorial(n) {
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
}

console.log("Factorial of 5 is:", factorial(5));
