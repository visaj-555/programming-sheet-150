const number = 7;
let isPrime = true;

if (number <= 1) {
  isPrime = false;
} else {
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      isPrime = false;
      break;
    }
  }
}

console.log(number + " is " + (isPrime ? "prime" : "not prime"));
