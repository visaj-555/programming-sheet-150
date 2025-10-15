function sumOfDiagonal(matrix) {
  let matrixLength = matrix.length;
  let sum = 0;

  for (let i = 0; i < matrixLength; i++) {
    sum += matrix[i][i];
  }

  console.log(sum);
}

sumOfDiagonal([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]);

// Input: matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
// Output: 15
