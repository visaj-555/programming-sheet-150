function primeSum(n) {
  var arr = [];
  let sum = 0;

  for (let i = 1; i <= n; i++) {
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

  for (let k = 0; k < arr.length; k++) {
    sum += arr[k];
  }

  return sum;
}

console.log(primeSum(10));
