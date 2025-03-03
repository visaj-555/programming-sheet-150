//====================== ODD  & EVEN  =====================//

number = 200;

if (number % 2 == 0) {
  console.log("Even !!");
} else {
  console.log("Odd ");
}

//====================== COUNT DIGITS  =====================//

function countDigits(num) {
  let sum = 0;
  let temp = num;

  while (temp > 0) {
    let lastDigit = temp % 10;
    sum += lastDigit;
    temp = Math.floor(temp / 10);
  }

  console.log("Sum: ", sum);
  return sum;
}

countDigits(123);

//====================== prime number  =====================//

function isPrime(n) {
  for (let i = 2; i < 10; i++) {
    if (n % i == 0 || n === 0) {
      console.log("Not Prime");
      break;
    } else {
      console.log("Prime Number");
      break;
    }
  }
}

isPrime(6);

//====================== REVERSE NUMBER =====================//
function reverseNumber(num) {
  let reversed = 0;
  let temp = num;

  while (temp > 0) {
    let lastDigit = temp % 10;
    reversed = reversed * 10 + lastDigit;
    temp = Math.floor(temp / 10);
  }

  console.log("Reverse Number: ", reversed);
  return reversed;
}

reverseNumber(1332212345);

//====================== COUNT TOTAL DIGITS =====================//
function countLength(num) {
  let count = 0;
  let temp = num;

  if (temp === 0) {
    count = 1;
  } else {
    while (temp > 0) {
      count++;
      temp = Math.floor(temp / 10);
    }
  }

  console.log("Length of given number: ", count);
  return count;
}

countLength(321);

//====================== Factorial =====================//

function factorial(digit) {
  let fact = 1;

  if (digit < 0) {
    console.log("Error: Cannot calculate factorial of negative numbers");
    return;
  }

  if (digit === 0) {
    console.log("Factorial of 0 is 1");
    return 1;
  }

  for (let i = 1; i <= digit; i++) {
    fact = fact * i;
  }

  console.log("Factorial: ", fact);
  return fact;
}

factorial(4);

//====================== gcd and hcf  =====================//

function findGCD(num1, num2) {
  let hcf = 0;
  for (let i = 1; i <= num1 && i <= num2; i++) {
    if (num1 % i === 0 && num2 % i === 0) {
      hcf = i;
    }
  }
  return hcf;
}

console.log("GCD is : ", findGCD(20, 50));

//====================== LCM  =====================//

function findLCM(num1, num2) {
  let gcd = findGCD(num1, num2);
  let lcm = (num1 * num2) / gcd;

  return lcm;
}
console.log("LCM is : ", findLCM(40, 90));

//====================== Palindrome =====================//

function isPalindrome(num) {
  let numStr = num.toString();
  let reversed = "";

  for (let i = numStr.length - 1; i >= 0; i--) {
    reversed += numStr[i];
  }

  if (numStr === reversed) {
    console.log("Palindrome number");
    return true;
  } else {
    console.log("Not a Palindrome number");
    return false;
  }
}

isPalindrome(232);

//====================== Fibonacci Series =====================//

function generateFibonacci(n) {
  const fibonacci = [0, 1];

  for (let i = 2; i < n; i++) {
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
  }

  return fibonacci.slice(0, n);
}

const result = generateFibonacci(5);
console.log("Fibonacci Series : ", result);
