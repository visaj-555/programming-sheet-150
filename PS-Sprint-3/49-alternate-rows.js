function spiralDiagonalMatrix(n) {
  let num = 1;

  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < n; j++) {
      row += num++ + " ";
    }
    console.log(row.trim());
  }
}

spiralDiagonalMatrix(3);
