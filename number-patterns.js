function printPattern1(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row = row + i + " ";
    }
    console.log(row);
  }
}

console.log("Pattern 1 : ");

function printPattern2(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = i; j >= 1; j--) {
      row += j + " ";
    }
    console.log(row);
  }
}

console.log("Pattern 2 : ");

function printPattern3(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";

    for (let j = 1; j <= i; j++) {
      row += j + " ";
    }

    console.log(row);
  }
}

function printPattern4(n) {
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n - i + 1; j++) {
      process.stdout.write("* ");
    }
    console.log("");
  }
}

console.log("Pattern 4 : ");

function printPattern5(n) {
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n - i + 1; j++) {
      process.stdout.write(j + " ");
    }
    console.log("");
  }
}

console.log("Pattern 5 : ");

function printPattern6(n) {
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n - i + 1; j++) {
      process.stdout.write(i + " ");
    }
    console.log("");
  }
}

console.log("Pattern 6 : ");

function Pattern7(n) {
  for (let i = 1; i <= n; i++) {
    let row = " ";
    for (let j = 1; j <= i; j++) {
      row += "*";
    }
    console.log(row);
  }
}

console.log("Pattern 7 : ");
Pattern7(8);
