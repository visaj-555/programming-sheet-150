function isPerfectNumber(num) {
  let sum = 0;

  // Find divisors and sum them up
  for (let i = 1; i < num; i++) {
    if (num % i === 0) {
      sum += i;
    }
  }

  // Check if sum of divisors equals the number
  return sum === num;
}

const number = 28;

if (isPerfectNumber(number)) {
  console.log(`${number} is a Perfect Number`);
} else {
  console.log(`${number} is NOT a Perfect Number`);
}
