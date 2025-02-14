const start = 10;
const end = 50;
var arr = [];

for (let i = start; i <= end; i++) {
  let isPrime = true; // Assume the number is prime

  if (i < 2) {
    isPrime = false; // Numbers less than 2 are not prime
  }

  for (let j = 2; j <= Math.sqrt(i); j++) {
    if (i % j === 0) {
      // If divisible, it's not prime
      isPrime = false;
      break;
    }
  }

  if (isPrime) {
    arr.push(i); // Add prime numbers to the array
  }
}

console.log("Prime Numbers:", arr);
