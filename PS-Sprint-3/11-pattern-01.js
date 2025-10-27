function binaryPattern(n) {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < n; j++) {
      if ((i + j) % 2 == 0) {
        row += 0;
      } else {
        row += 1;
      }
    }

    console.log(row);
  }
}

binaryPattern(5);
