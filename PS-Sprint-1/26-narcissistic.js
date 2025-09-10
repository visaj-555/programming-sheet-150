const number = 153;
let temp = number;
let digits = [];

while (temp > 0) {
  let lastDigit = temp % 10;
  digits.push(lastDigit);
  temp = Math.floor(temp / 10);
}

let power = digits.length;
let sum = 0;

for (i = 0; i < power; i++) {
  let n1 = Math.pow(digits[i], power);
  sum = sum + n1;
}

console.log("Sum: ", sum);

if (number == sum) {
  console.log("Yes its an Narcissistic  Number ");
} else {
  console.log("Not an narcissistic  number");
}
