function spiralMatrix(n) {
  let matrix = Array.from({ length: n }, () => Array(n).fill(0));

  let top = 0,
    bottom = n - 1;
  let left = 0,
    right = n - 1;
  let num = 1;

  while (num <= n * n) {
    for (let i = left; i <= right; i++) matrix[top][i] = num++;
    top++;

    for (let i = top; i <= bottom; i++) matrix[i][right] = num++;
    right--;

    for (let i = right; i >= left; i--) matrix[bottom][i] = num++;
    bottom--;

    for (let i = bottom; i >= top; i--) matrix[i][left] = num++;
    left++;
  }

  // print the matrix
  for (let row of matrix) console.log(...row);
}

spiralMatrix(3);
