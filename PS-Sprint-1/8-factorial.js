// EASY APPROACH

function fact(n) {
  let res = 1;
  for (let i = 1; i <= n; i++) {
    res *= i; // res = res * i;
  }
  return res;
}
console.log(fact(5));

// RECURSIVE APPROACH
function factorial(n) {
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
}

console.log("Factorial of 5 is:", factorial(5));
