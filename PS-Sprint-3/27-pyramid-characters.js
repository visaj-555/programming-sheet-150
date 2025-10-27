function PyramidCharacters(n) {
  let charCode = 65;

  for (let i = 1; i <= n; i++) {
    let row = "";

    // spaces
    for (let j = n; j > i; j--) {
      row += " ";
    }

    // characters
    for (let k = 1; k <= 2 * i - 1; k++) {
      row += String.fromCharCode(charCode);
      charCode++;
    }

    console.log(row);
  }
}

PyramidCharacters(3);
