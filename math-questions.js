//====================== FACTORIAL ITERATIVE =====================//

function factorialIterative(n) {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result = result * i;
  }
  return result;
}

//====================== FACTORIAL RECURSIVE =====================//

function factorialRecursive(n) {
  return n === 0 ? 1 : n * factorialRecursive(n - 1);
}

console.log("Iteration :  ", factorialIterative(7));
console.log("Recursive :  ", factorialRecursive(5));

//====================== SUM OF DIGITS =====================//

function sumOfDigits(num) {
  let sum = 0;
  // let i = num;

  while (num > 0) {
    let lastDigit = num % 10;
    sum = sum + lastDigit;
    num = (num - lastDigit) / 10;
  }

  return sum;
}

console.log("Sum of Digits : ", sumOfDigits(123));

//====================== POWER =====================//

function power(base, exponent) {
  let result = 1;

  for (let i = 0; i < exponent; i++) {
    result = result * base;
  }

  return result;
}

console.log("Power :  ", power(2, 5));

//====================== GCD FROM 2 NUMBERS =====================//

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

//====================== GCD FROM THE LIST =====================//

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

//====================== FIBONACCI NUMBER =====================//

function fibonacci(n) {
  let a = 0,
    b = 1,
    temp;

  for (let i = 2; i <= n; i++) {
    temp = a + b;
    a = b;
    b = temp;
  }

  return n === 0 ? 0 : b;
}

console.log("Fibonacci Series Iterative : ");
console.log(fibonacci(10));

//====================== FIBONACCI NUMBER RECURSIVE =====================//

function fibonacciRecursive(n) {
  if (n <= 1) return n;
  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}

console.log("Fibonacci Series Recursive: ");
console.log(fibonacciRecursive(10));

//====================== SUM OF EVEN NUMBERS =====================//

function sumEvenNumbers(n) {
  let sum = 0;
  for (let i = 2; i <= n; i += 2) {
    sum += i;
  }
  return sum;
}

console.log("Sum of EVEN Numbers : ");

console.log(sumEvenNumbers(10));

//====================== SUM OF ODD NUMBERS =====================//

function sumOddNumbers(n) {
  let sum = 0;
  for (let i = 1; i <= n; i += 2) {
    sum += i;
  }
  return sum;
}

console.log("Sum of Odd Numbers : ");
console.log(sumOddNumbers(20));

//====================== TRIANGULAR NUMBER =====================//

function triangularNumber(n) {
  return (n * (n + 1)) / 2;
}

console.log("Triangular Number  : ");
console.log(triangularNumber(7));
