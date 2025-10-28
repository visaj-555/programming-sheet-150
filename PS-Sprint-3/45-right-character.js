function increasingCharacterPattern(n) {
  let charCode = 65; // 'A'

  for (let i = 1; i <= n; i++) {
    let row = "";

    for (let j = 1; j <= i; j++) {
      row += String.fromCharCode(charCode);
      charCode++;
    }

    console.log(row);
  }
}

increasingCharacterPattern(3);
