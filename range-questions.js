//====================== SEARCH PRIME NUMBERS IN RANGE =====================//

function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function findPrimesInRange(L, R) {
  for (let num = L; num <= R; num++) {
    if (isPrime(num)) {
      console.log(num);
    }
  }
}

console.log("Find Prime Numbers in Range  : ");
findPrimesInRange(10, 30);

//====================== SUM OF PRIME NUMBERS  =====================//

function sumOfPrimes(L, R) {
  let sum = 0;

  for (let num = L; num <= R; num++) {
    let isPrime = true;
    if (num < 2) continue;

    for (let i = 2; i * i <= num; i++) {
      if (num % i === 0) {
        isPrime = false;
        break;
      }
    }

    if (isPrime) sum += num;
  }

  console.log("Sum of Prime Numbers:", sum);
}

sumOfPrimes(10, 30);

//====================== ARM STRONG NUMBERS =====================//

function countDigits(num) {
  let count = 0;
  while (num > 0) {
    count++;
    num = Math.floor(num / 10);
  }
  return count;
}

function isArmstrong(num) {
  let sum = 0,
    temp = num;
  let digits = countDigits(num);

  while (temp > 0) {
    let lastDigit = temp % 10;
    let power = 1;
    for (let i = 0; i < digits; i++) power *= lastDigit;
    sum += power;
    temp = Math.floor(temp / 10);
  }

  return sum === num;
}

function findArmstrongNumbers(L, R) {
  for (let num = L; num <= R; num++) {
    if (isArmstrong(num)) {
      console.log(num);
    }
  }
}

console.log("Find Arm Strong Numbers : ");
findArmstrongNumbers(100, 500);
