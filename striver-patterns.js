function printPattern1(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= n; j++) {
      row += "*";
    }

    console.log(row);
  }
}

console.log("Square : ");
printPattern1(5);

function printPattern2(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += "*";
    }

    console.log(row);
  }
}

console.log("Left Angle Triangle : ");
printPattern2(5);

function printPattern3(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= n - i + 1; j++) {
      row += "*";
    }

    console.log(row);
  }
}

console.log("Right Angle Triangle: ");
printPattern3(5);

function printPattern4(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= n - i + 1; j++) {
      row += i;
    }

    console.log(row);
  }
}

console.log("Right Angle Repeatative Number : ");
printPattern4(5);

function printPattern5(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += i;
    }

    console.log(row);
  }
}

console.log("Left Angle Repeatative Number  : ");
printPattern5(5);

function printPattern6(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += j;
    }

    console.log(row);
  }
}

console.log("Left Angle Increasing: ");
printPattern6(5);

function printPattern7(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= n - i + 1; j++) {
      row += i;
    }

    console.log(row);
  }
}

console.log("Right Angle Decreasing Repeatative : ");
printPattern7(5);

function printPattern8(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= n - i + 1; j++) {
      row += j;
    }

    console.log(row);
  }
}

console.log("Right Angle Decreasing : ");
printPattern8(5);

function printPattern9(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= n - i + 1; j++) {
      row += n - i + 1;
    }

    console.log(row);
  }
}

console.log("Pyramid :  ");
printPattern9(5);

function printDiamond(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";

    // Add spaces before stars
    for (let j = 1; j <= n - i; j++) {
      row += " ";
    }

    // Add stars
    for (let k = 1; k <= 2 * i - 1; k++) {
      row += "*";
    }

    console.log(row);
  }

  for (let i = n - 1; i >= 1; i--) {
    let row = "";

    // Add spaces before stars
    for (let j = 1; j <= n - i; j++) {
      row += " ";
    }

    // Add stars
    for (let k = 1; k <= 2 * i - 1; k++) {
      row += "*";
    }

    console.log(row);
  }
}

console.log("Diamond Pattern:");
printDiamond(5);

function printPattern10(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";

    for (let j = 1; j <= n; j++) {
      if (i === 1 || i === n || j === 1 || j === n) {
        row += "*";
      } else {
        row += " ";
      }
    }

    console.log(row);
  }
}

console.log("Pattern 10 : ");
printPattern10(5);

function printLeftTriangle(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";

    // Print spaces
    for (let j = 1; j <= n - i; j++) {
      row += " ";
    }

    // Print stars
    for (let j = 1; j <= i; j++) {
      row += "*";
    }

    console.log(row);
  }
}

console.log("Left Triangle Pattern:");
printLeftTriangle(5);

function printHollowRightTriangle(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";

    for (let j = 1; j <= i; j++) {
      // Print star if it's first/last column or last row or first row
      if (j === 1 || j === i || i === n) {
        row += "*";
      } else {
        row += " ";
      }
    }

    console.log(row);
  }
}

console.log("\nHollow Right Triangle Pattern:");
printHollowRightTriangle(5);

function pascalTriangle(n) {
  for (let i = 0; i < n; i++) {
    let row = "";

    // Add spaces for alignment
    for (let space = 0; space < n - i - 1; space++) {
      row += " ";
    }

    // Calculate and add numbers
    let num = 1;
    for (let j = 0; j <= i; j++) {
      row += num + ""; // Convert to string

      // Calculate next number using combination formula
      num = (num * (i - j)) / (j + 1);
    }

    console.log(row);
  }
}

console.log("Pascal's Triangle:");
pascalTriangle(5);

function binaryToggleTriangle(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    let start = i % 2 === 0 ? 0 : 1;

    for (let j = 1; j <= i; j++) {
      row += start;
      start = 1 - start;
    }

    console.log(row);
  }
}

console.log("Binary Toggle Right Angle Triangle:");
binaryToggleTriangle(5);

function mirroredNumbersTriangle(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";

    // Left Side Numbers (1 to i)
    for (let j = 1; j <= i; j++) {
      row += j;
    }

    // Spaces (2 * (n - i))
    for (let spaces = 1; spaces <= 2 * (n - i); spaces++) {
      row += " ";
    }

    // Right Side Numbers (i to 1)
    for (let j = i; j >= 1; j--) {
      row += j;
    }

    console.log(row);
  }
}

console.log("Mirrored Numbers Triangle:");
mirroredNumbersTriangle(5);

function sequentialNumbersTriangle(n) {
  let count = 1;

  for (let i = 1; i <= n; i++) {
    let row = [];

    for (let j = 1; j <= i; j++) {
      row.push(count++);
    }

    console.log(row.join(" "));
  }
}

console.log("Sequential Numbers Triangle:");
sequentialNumbersTriangle(5);

function alphabetIncreasingTriangle(n) {
  for (let i = 1; i <= n; i++) {
    let row = [];
    for (let j = 0; j < i; j++) {
      row.push(String.fromCharCode(65 + j));
    }
    console.log(row.join(" "));
  }
}

console.log("Pattern 15: Alphabet Increasing Triangle");
alphabetIncreasingTriangle(5);

function alphabetDecreasingTriangle(n) {
  for (let i = 0; i < n; i++) {
    let row = [];
    for (let j = 0; j < n - i; j++) {
      row.push(String.fromCharCode(65 + j));
    }
    console.log(row.join(" "));
  }
}

console.log("Pattern 16: Alphabet Decreasing Triangle");
alphabetDecreasingTriangle(5);
