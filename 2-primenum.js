const number = 7;
let isPrime = true;

// Handle edge cases
if (number <= 1) {
  isPrime = false;
} else {
  // Check for divisibility from 2 to square root of number
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      isPrime = false;
      break;
    }
  }
}

console.log(number + " is " + (isPrime ? "prime" : "not prime"));
