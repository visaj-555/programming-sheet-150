function sumOfSquare(num) {
  const numString = String(num);
  const charArray = numString.split("");
  const digitsArray = charArray.map(Number);
  let sum = 0;

  for (let i = 0; i < digitsArray.length; i++) {
    let mul = digitsArray[i] * digitsArray[i];
    sum += mul;
  }

  return sum;
}

console.log(sumOfSquare(123));

// Example:
// Input: number = 123
// Output: 14
// Explanation: The sum of the squares of digits is 1^2 + 2^2 + 3^2 = 14.
