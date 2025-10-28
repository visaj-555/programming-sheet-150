function matrixDiamond(n) {
  // Upper half
  for (let i = 1; i <= n; i++) {
    let row = "";

    // Spaces
    for (let j = 1; j <= n - i; j++) {
      row += " ";
    }

    // Increasing numbers
    for (let k = 1; k <= i; k++) {
      row += k;
    }

    // Decreasing numbers
    for (let k = i - 1; k >= 1; k--) {
      row += k;
    }

    console.log(row);
  }

  // Lower half
  for (let i = n - 1; i >= 1; i--) {
    let row = "";

    // Spaces
    for (let j = 1; j <= n - i; j++) {
      row += " ";
    }

    // Increasing numbers
    for (let k = 1; k <= i; k++) {
      row += k;
    }

    // Decreasing numbers
    for (let k = i - 1; k >= 1; k--) {
      row += k;
    }

    console.log(row);
  }
}

matrixDiamond(3);
