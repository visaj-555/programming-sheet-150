function compactdiamondPattern(n) {
  // Upper half
  for (let i = 1; i <= n; i += 2) {
    let spaces = " ".repeat((n - i) / 2);
    let stars = "*".repeat(i);
    console.log(spaces + stars);
  }

  // Lower half
  for (let i = n - 2; i >= 1; i -= 2) {
    let spaces = " ".repeat((n - i) / 2);
    let stars = "*".repeat(i);
    console.log(spaces + stars);
  }
}

console.log("Compact Diamond : ");

compactdiamondPattern(10);

function diamondPattern(n) {
  // Upper half
  for (let i = 1; i <= n; i++) {
    let row = "";

    // spaces
    for (let j = 1; j <= n - i; j++) {
      row += " ";
    }

    // stars
    for (let k = 1; k <= 2 * i - 1; k++) {
      row += "*";
    }

    console.log(row);
  }

  // Lower half
  for (let i = n - 1; i >= 1; i--) {
    let row = "";

    // spaces
    for (let j = 1; j <= n - i; j++) {
      row += " ";
    }

    // stars
    for (let k = 1; k <= 2 * i - 1; k++) {
      row += "*";
    }

    console.log(row);
  }
}

console.log("Full Diamond : ");
diamondPattern(5);
