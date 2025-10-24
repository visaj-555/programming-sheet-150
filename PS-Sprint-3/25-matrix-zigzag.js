function matrixZigZag(n) {
  let num = 1;
  let matrix = Array.from({ length: n }, () => Array(n).fill(0));

  for (let i = 0; i < n; i++) {
    if (i % 2 === 0) {
      for (let j = 0; j < n; j++) {
        matrix[i][j] = num++;
      }
    } else {
      for (let j = n - 1; j >= 0; j--) {
        matrix[i][j] = num++;
      }
    }
  }

  // print matrix
  for (let row of matrix) {
    console.log(row.join(" "));
  }
}

matrixZigZag(4);
