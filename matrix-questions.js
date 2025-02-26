//====================== SQUARE MATRIX =====================//
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

  console.log("\nSquare Matrix:");
  matrix.forEach((row) => {
    console.log(row.map((num) => num.toString().padStart(2, " ")).join(" "));
  });
}

//====================== NUMBER PATTERN =====================//
function printNumberPattern(n) {
  console.log("\nNumber Pattern:");
  for (let i = 1; i <= n; i++) {
    let str = " ".repeat(n - i);
    for (let j = 1; j <= i; j++) str += j + " ";
    for (let j = i - 1; j >= 1; j--) str += j + " ";
    console.log(str.trimEnd());
  }
}

//====================== SPIRAL MATRIX =====================//
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

  console.log("\nSpiral Matrix:");
  matrix.forEach((row) => {
    console.log(row.map((num) => num.toString().padStart(2, " ")).join(" "));
  });
}

//====================== ROTATE MATRIX =====================//
function rotateMatrix(matrix) {
  let n = matrix.length;

  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }

  for (let row of matrix) row.reverse();

  console.log("\nRotate Matrix:");
  matrix.forEach((row) => {
    console.log(row.map((num) => num.toString().padStart(2, " ")).join(" "));
  });

  return matrix;
}

//====================== TRANSPOSE MATRIX =====================//
function transposeMatrix(matrix) {
  let rows = matrix.length,
    cols = matrix[0].length;
  let result = Array.from({ length: cols }, () => Array(rows).fill(0));

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      result[j][i] = matrix[i][j];
    }
  }

  console.log("\nTranspose Matrix:");
  result.forEach((row) => {
    console.log(row.map((num) => num.toString().padStart(2, " ")).join(" "));
  });

  return result;
}

//====================== EXECUTE ALL FUNCTIONS  =====================//
generateSquareMatrix(3);
printNumberPattern(5);
generateSpiralMatrix(3);
rotateMatrix([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]);
transposeMatrix([
  [1, 2, 3],
  [4, 5, 6],
]);
