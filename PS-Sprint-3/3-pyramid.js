function Pyramid(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    // for spaces
    for (let spaces = n; spaces >= i; spaces--) {
      row += " ";
    }
    // for stars
    for (let stars = 1; stars <= 2 * i - 1; stars++) {
      row += "*";
    }
    console.log(row);
  }
}

Pyramid(5);
