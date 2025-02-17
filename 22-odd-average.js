function sumOfOddNumbers(start, end) {
  let sum = 0;

  for (let i = start; i <= end; i++) {
    if (i % 2 === 1) {
      sum += i;
    }
  }

  console.log("Sum of odd numbers:", sum);
}

sumOfEvenNumbers(1, 10);
