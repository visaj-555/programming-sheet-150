function spiralMatrix(n) {
  let matrix = Array.from({ length: n }, () => Array(n).fill(0));
  let num = 1;
  let top = 0,
    bottom = n - 1,
    left = 0,
    right = n - 1;

  while (top <= bottom && left <= right) {
    // left ➜ right
    for (let i = left; i <= right; i++) matrix[top][i] = num++;
    top++;

    // top ➜ bottom
    for (let i = top; i <= bottom; i++) matrix[i][right] = num++;
    right--;

    // right ➜ left
    for (let i = right; i >= left; i--) matrix[bottom][i] = num++;
    bottom--;

    // bottom ➜ top
    for (let i = bottom; i >= top; i--) matrix[i][left] = num++;
    left++;
  }

  // print the matrix
  for (let row of matrix) {
    console.log(row.join(" "));
  }
}

spiralMatrix(3);
