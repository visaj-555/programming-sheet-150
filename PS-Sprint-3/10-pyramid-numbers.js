function pyramidPattern(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";

    for (let s = 1; s <= n - i; s++) {
      row += " ";
    }

    for (let j = i; j <= 2 * i - 1; j++) {
      row += j;
    }

    for (let j = 2 * i - 2; j >= i; j--) {
      row += j;
    }

    console.log(row);
  }
}

pyramidPattern(3);
