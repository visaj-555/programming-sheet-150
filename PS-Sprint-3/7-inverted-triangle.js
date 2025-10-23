function invertedTriangle(n) {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = i; j < n; j++) {
      row += "*";
    }
    console.log(row);
  }
}

invertedTriangle(5);
