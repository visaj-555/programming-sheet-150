function crossPatternWithDiagonals(n) {
  let totalRows = 2 * n - 1;

  for (let i = 0; i < totalRows; i++) {
    let spaces = i < n ? i : totalRows - i - 1;
    let stars = n - spaces;

    let row = " ".repeat(spaces);
    row += "* ".repeat(stars).trim();
    console.log(row);
  }
}

crossPatternWithDiagonals(5);
