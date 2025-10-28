function alternateCharacters(n) {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < n; j++) {
      if ((i + j) % 2 == 0) {
        row += "A";
      } else {
        row += "B";
      }
    }

    console.log(row);
  }
}

alternateCharacters(5);
