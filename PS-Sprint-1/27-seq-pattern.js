// 1
// 2 3
// 4 5 6

let n = 3;
let counter = 1;

for (let i = 0; i < n; i++) {
  let row = "";

  for (let j = 0; j <= i; j++) {
    row += counter + " ";
    counter++;
  }

  console.log(row.trim());
}
