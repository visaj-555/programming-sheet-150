function fibonacciMatrix(size) {
  let fib = [0, 1];
  for (let i = 2; i < size * size + 2; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }

  let index = 1;
  for (let i = 0; i < size; i++) {
    let row = "";
    for (let j = 0; j < size; j++) {
      row += fib[index++] + " ";
    }
    console.log(row.trim());
  }
}

fibonacciMatrix(3);
