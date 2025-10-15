function matrix(n) {
  const matrix = [];

  for (let i = 0; i < n; i++) {
    const row = [];
    for (let j = 0; j < n; j++) {
      row.push((i + j) % 2);
    }
    matrix.push(row);
  }
  return matrix;
}

// Example usage:
console.log(matrix(3));

// 0 1 0
// 1 0 1
// 0 1 0
