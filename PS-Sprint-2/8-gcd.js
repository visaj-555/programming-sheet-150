// GCD FROM THE 2 NUMBERS

function findGCD(num1, num2) {
  let hcf = 1;

  for (let i = 1; i <= num1 && i <= num2; i++) {
    if (num1 % i === 0 && num2 % i === 0) {
      hcf = i;
    }
  }

  return hcf;
}

console.log("GCD is:", findGCD(30, 20));

// GCD FROM THE LIST

function findGCDfromList(numbers) {
  let hcf = numbers[0];

  for (let i = 1; i < numbers.length; i++) {
    for (let j = 1; j <= hcf && j <= numbers[i]; j++) {
      if (hcf % j === 0 && numbers[i] % j === 0) {
        hcf = j;
      }
    }
  }

  return hcf;
}

const numbers = [350, 200, 100];
console.log("GCD from the list is:", findGCDfromList(numbers));
