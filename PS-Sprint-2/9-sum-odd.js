function sumOdd(N) {
  let sum = 0;
  let odd = 1;

  for (let i = 0; i < N; i++) {
    sum += odd;
    odd += 2;
  }

  return sum;
}

console.log(sumOdd(5));
