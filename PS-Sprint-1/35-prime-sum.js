function primeSum(start, end) {
  var arr = [];
  let sum = 0;

  for (let i = start; i <= end; i++) {
    let isPrime = true;

    if (i < 2) {
      isPrime = false;
    }

    for (let j = 2; j <= Math.sqrt(i); j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }

    if (isPrime) {
      arr.push(i);
    }
  }

  for (let k = 0; k < arr.length; k++) {
    sum += arr[k];
  }
  console.log("Sum of Prime Numbers:", sum);
}

primeSum(1, 10);

// Example:
// Input: range = [1, 10]
// Output: 17
// Explanation: The sum of prime numbers between 1 and 10 is 2 + 3 + 5 + 7 = 17.
