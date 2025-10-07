function perfectNumberTillN(n) {
  let count = 0;

  for (let i = 1; i <= n; i++) {
    let sumOfDivisors = 0;

    for (let j = 1; j < i; j++) {
      if (i % j === 0) {
        sumOfDivisors += j;
      }
    }

    if (sumOfDivisors === i) {
      count++;
    }
  }

  return count;
}

console.log(perfectNumberTillN(30));
