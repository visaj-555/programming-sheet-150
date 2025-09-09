let n = 10;
let a = 0,
  b = 1;

for (let i = 0; i < n; i++) {
  let temp = a + b;
  a = b;
  b = temp;
}

console.log("Fibonacci Number : ");
console.log(a);
