function printPattern1(n) {
  for (let i = 0; i < n; i++) {
    console.log("* ".repeat(n));
  }
}

printPattern1(5);

function printPattern2(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += "* ";
    }
    console.log(row);
  }
}
printPattern2(5);

function printDiamond(n) {
  for (let i = 1; i <= n; i++) {
    console.log(" ".repeat(n - i) + "* ".repeat(i));
  }

  for (let i = n - 1; i >= 1; i--) {
    console.log(" ".repeat(n - i) + "* ".repeat(i));
  }
}
printDiamond(5);
