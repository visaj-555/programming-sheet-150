function starPattern(n) {
  for (let i = 1; i <= n; i++) {
    let row = "*".repeat(2 * i - 1);
    console.log(row);
  }
}

starPattern(3);
