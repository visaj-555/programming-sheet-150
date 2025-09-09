function printPrimeNumber(n) {
  try {
    for (let i = 2; i < n; i++) {
      if (!(i % Math.sqrt(i) === 0)) {
        console.log(i);
      }
    }
  } catch (error) {}
}

printPrimeNumber(20);
