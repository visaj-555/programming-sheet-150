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
    for (let j = 1; j <= n - i + 1; j++) {
      process.stdout.write("* ");
    }
    console.log("");
  }
}

console.log("Pattern 4 : ");
printPattern4(5);

function printPattern5(n) {
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n - i + 1; j++) {
      process.stdout.write(j + " ");
    }
    console.log("");
  }
}

console.log("Pattern 5 : ");
printPattern5(5);

function printPattern6(n) {
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n - i + 1; j++) {
      process.stdout.write(i + " ");
    }
    console.log("");
  }
}

console.log("Pattern 6 : ");
printPattern6(5);
