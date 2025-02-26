function generatePascalsTriangle(n) {
  let triangle = [];

  for (let i = 0; i < n; i++) {
    let row = [1];

    for (let j = 1; j < i; j++) {
      row[j] = triangle[i - 1][j - 1] + triangle[i - 1][j];
    }

    if (i > 0) row.push(1);
    triangle.push(row);
  }

  return triangle;
}

console.log(generatePascalsTriangle(5));

function generateSquareMatrix(n) {
  let matrix = [];
  let num = 1;

  for (let i = 0; i < n; i++) {
    let row = [];
    for (let j = 0; j < n; j++) {
      row.push(num++);
    }
    matrix.push(row);
  }

  return matrix;
}

console.log(generateSquareMatrix(3));

function printNumberPattern(n) {
  for (let i = 1; i <= n; i++) {
    let str = " ".repeat(n - i);

    for (let j = 1; j <= i; j++) str += j;
    for (let j = i - 1; j >= 1; j--) str += j;

    console.log(str);
  }
}

printNumberPattern(5);

function generateSpiralMatrix(n) {
  let matrix = Array.from({ length: n }, () => Array(n).fill(0));
  let num = 1,
    left = 0,
    right = n - 1,
    top = 0,
    bottom = n - 1;

  while (left <= right && top <= bottom) {
    for (let i = left; i <= right; i++) matrix[top][i] = num++;
    top++;

    for (let i = top; i <= bottom; i++) matrix[i][right] = num++;
    right--;

    for (let i = right; i >= left; i--) matrix[bottom][i] = num++;
    bottom--;

    for (let i = bottom; i >= top; i--) matrix[i][left] = num++;
    left++;
  }

  return matrix;
}

console.log(generateSpiralMatrix(3));

function rotateMatrix(matrix) {
  let n = matrix.length;

  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]]; // Transpose
    }
  }

  for (let row of matrix) row.reverse(); // Reverse each row

  return matrix;
}

console.log(
  rotateMatrix([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);

function transposeMatrix(matrix) {
  let rows = matrix.length,
    cols = matrix[0].length;
  let result = Array.from({ length: cols }, () => Array(rows).fill(0));

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      result[j][i] = matrix[i][j];
    }
  }

  return result;
}

console.log(
  transposeMatrix([
    [1, 2, 3],
    [4, 5, 6],
  ])
);
