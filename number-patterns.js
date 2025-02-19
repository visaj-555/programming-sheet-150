// Method 1: Using nested loops with string concatenation
function printPattern1(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row = row + i + " ";
    }
    console.log(row);
  }
}

console.log("Pattern 1   : ");
printPattern1(4);

function printPattern2(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    // Start from i and go down to 1
    for (let j = i; j >= 1; j--) {
      row += j + " ";
    }
    console.log(row);
  }
}

console.log("Pattern 2   : ");

printPattern2(4);

function printPattern3(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";

    for (let j = 1; j <= i; j++) {
      row += j + " ";
    }

    console.log(row);
  }
}

console.log("Pattern 3  : ");
printPattern3(5);

function printPattern4(n) {
  for (let i = 1; i <= n; i++) {
    // Outer loop: Rows (Runs n times)
    for (let j = 1; j <= n - i + 1; j++) {
      // Inner loop: Columns (Decreases each row)
      process.stdout.write("* "); // Print '*' in the same line
    }
    console.log(""); // Move to the next line after finishing a row
  }
}

console.log("Pattern 4 : ");
printPattern4(5);
