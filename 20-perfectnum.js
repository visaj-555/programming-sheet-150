function isPerfectNumber(num) {
  let sum = 0;

  // Find divisors (excluding the number itself)
  for (let i = 1; i < num; i++) {
    if (num % i === 0) {
      sum += i; // Add divisor to sum
    }
  }

  // Check if sum of divisors equals the original number
  if (sum === num) {
    console.log(num + " is a Perfect Number");
  } else {
    console.log(num + " is NOT a Perfect Number");
  }
}

// Test case
isPerfectNumber(28); // Output: 28 is a Perfect Number
isPerfectNumber(15); // Output: 15 is NOT a Perfect Number
