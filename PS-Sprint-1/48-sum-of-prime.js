function sumOfPrimeFactors(n) {
  let sum = 0;

  for (let i = 2; i <= n; i++) {
    if (n % i === 0 && isPrime(i)) {
      sum += i;
    }
  }

  return sum;
}

// Helper function
function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

console.log(sumOfPrimeFactors(12));
