function spiralZigzag(n) {
  let matrix = Array.from({ length: n }, () => Array(n).fill(0));
  let num = 1;

  for (let i = 0; i < n; i++) {
    if (i % 2 === 0) {
      // left → right
      for (let j = 0; j < n; j++) {
        matrix[i][j] = num++;
      }
    } else {
      // right → left
      for (let j = n - 1; j >= 0; j--) {
        matrix[i][j] = num++;
      }
    }
  }

  // Print matrix
  for (let row of matrix) {
    console.log(row.join(" "));
  }
}

spiralZigzag(3);
