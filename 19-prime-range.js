const start = 10;
const end = 50;
var arr = [];

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

console.log("Prime Numbers:", arr);
