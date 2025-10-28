function zigZagPattern(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    let count = i % 2 === 0 ? n - 1 : n;

    if (i % 2 === 0) row += " ";
    for (let j = 1; j <= count; j++) {
      row += "* ";
    }
    console.log(row.trimEnd());
  }
}

zigZagPattern(3);
