function crossNumberPattern(n) {
  const mid = Math.floor(n / 2);

  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < n; j++) {
      let num = Math.abs(mid - Math.min(i, j, n - 1 - i, n - 1 - j));
      row += num;
    }
    console.log(row);
  }
}

crossNumberPattern(5);
