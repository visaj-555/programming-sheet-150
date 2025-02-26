function gcd(a, b) {
  return b === 0 ? a : gcd(b, a % b);
}

function lcm(a, b) {
  return (a * b) / gcd(a, b);
}

const num1 = 10;
const num2 = 85;

console.log(`The LCM of ${num1} and ${num2} is ${lcm(num1, num2)}`);
