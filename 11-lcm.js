function gcd(a, b) {
  return b === 0 ? a : gcd(b, a % b);
}

function lcm(a, b) {
  return (a * b) / gcd(a, b);
}

const num1 = Number(prompt("Enter a first positive integer: "));
const num2 = Number(prompt("Enter a second positive integer: "));

console.log(`The LCM of ${num1} and ${num2} is ${lcm(num1, num2)}`);
