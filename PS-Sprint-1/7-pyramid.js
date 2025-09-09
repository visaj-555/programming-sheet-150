let n = 5;

console.log("Pyramid : ");

for (let i = 0; i < n; i++) {
  let row = "";

  // Step 1: Add spaces
  for (let j = 0; j < n - i - 1; j++) {
    row += " ";
  }

  // Step 2: Add stars
  for (let k = 0; k < 2 * i + 1; k++) {
    row += "*";
  }

  console.log(row);
}

for (let i = 1; i <= n; i++) {
  // calculate spaces and stars
  let spaces = " ".repeat(n - i);
  let stars = "*".repeat(2 * i - 1);

  // print the line
  console.log(spaces + stars);
}
