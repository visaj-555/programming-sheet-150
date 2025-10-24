function diagonalPattern(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= n; j++) {
      let char = String.fromCharCode(65 + i - 1);
      if (j == 1 || j == i) {
        row += char;
      } else {
        row += " ";
      }
    }

    console.log(row);
  }
}

diagonalPattern(4);
