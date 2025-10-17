function diagonalMatrix(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= n; j++) {
      if (j <= i) {
        row += "1 ";
      } else {
        row += "0 ";
      }
    }
    console.log(row.trim());
  }
}

diagonalMatrix(4);
