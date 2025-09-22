function squareMatrix(N) {
  let matrix = [];
  let count = 1;

  for (let i = 0; i < N; i++) {
    let row = [];
    for (let j = 0; j < N; j++) {
      row.push(count);
      count++;
    }
    matrix.push(row);
  }

  return matrix;
}

console.log(squareMatrix(3));
