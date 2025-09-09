function sumOfEvenNumbers(start, end) {
  let sum = 0;

  for (let i = start; i <= end; i++) {
    if (i % 2 === 0) {
      sum += i;
    }
  }

  console.log("Sum of even numbers:", sum);
}

sumOfEvenNumbers(1, 10);
