function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function largestPrimeFactor(n) {
  let factors = [];

  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      factors.push(i);
    }
  }

  let primeFactors = [];
  for (let i = 0; i < factors.length; i++) {
    if (isPrime(factors[i])) {
      primeFactors.push(factors[i]);
    }
  }

  return Math.max(...primeFactors);
}

console.log(largestPrimeFactor(28));
