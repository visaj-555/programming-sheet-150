function countDigit(number, digit) {
  let count = 0;
  const numString = String(number);

  for (let i = 0; i < numString.length; i++) {
    if (numString[i] == digit) {
      count++;
    }
  }

  return count;
}

console.log(countDigit(122333, 3));
