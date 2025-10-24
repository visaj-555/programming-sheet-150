function invertedCharacterPyramid(n) {
  for (let i = n; i >= 1; i--) {
    let spaces = " ".repeat(n - i);

    let char = String.fromCharCode(64 + i);

    let row = spaces + char.repeat(i);

    console.log(row);
  }
}

invertedCharacterPyramid(3);
