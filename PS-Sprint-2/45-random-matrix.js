function randomMatrix(rows, cols) {
  let matrix = [];

  for (let i = 0; i < rows; i++) {
    let row = [];
    for (let j = 0; j < cols; j++) {
      let randomNum = Math.floor(Math.random() * 9) + 1;
      row.push(randomNum);
    }
    matrix.push(row);
  }

  for (let r of matrix) {
    console.log(...r);
  }

  return matrix;
}
randomMatrix(2, 3);
