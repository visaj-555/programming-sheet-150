function borderPattern(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";

    for (let j = 1; j <= n; j++) {
      if (i === 1 || i === n || j === 1 || j === n) {
        row += j;
      } else {
        row += " ";
      }
    }

    console.log(row);
  }
}

borderPattern(4);
