function Pattern1(n) {
  var row = "";
  console.log("Pattern 1 : ");
  for (let i = 0; i < n; i++) {
    row += "*";
    console.log(row);
  }
}

function Pattern2(n) {
  console.log("Pattern 2 : ");
  for (let i = 0; i < n; i++) {
    let row = ""; // Reset row each time
    for (let j = 0; j < n - i; j++) {
      // Decreasing loop condition
      row += "*";
    }
    console.log(row);
  }
}

function Pattern3(n) {
  console.log("Pattern 3:");

  for (let i = 0; i < n; i++) {
    // Print spaces first
    let spaces = "";
    for (let j = 0; j < i; j++) {
      spaces += " ";
    }
    process.stdout.write(spaces);

    let stars = "";
    for (let k = 0; k < n - i; k++) {
      stars += "*";
    }
    console.log(stars);
  }
}

function Pattern4(n) {
  console.log("Pattern 4:");

  // Upper half (including middle row)
  for (let i = 0; i < n; i++) {
    let spaces = " ".repeat(n - i - 1);
    let stars = "*".repeat(2 * i + 1);
    console.log(spaces + stars);
  }

  // Lower half
  for (let i = n - 2; i >= 0; i--) {
    let spaces = " ".repeat(n - i - 1);
    let stars = "*".repeat(2 * i + 1);
    console.log(spaces + stars);
  }
}

//     *
//    * *
//   *   *
//  *     *
// *       *
//  *     *
//   *   *
//    * *
//     *

function Pattern5(n) {
  let totalRows = 2 * n - 1;

  for (let i = 0; i < totalRows; i++) {
    let row = "";
    let spacesBefore = Math.abs(n - 1 - i);
    let spacesBetween = 2 * (n - 1 - spacesBefore) - 1;

    row += " ".repeat(spacesBefore);

    row += "*";

    if (spacesBetween > 0) {
      row += " ".repeat(spacesBetween) + "*";
    }

    console.log(row);
  }
}

Pattern5(5);
