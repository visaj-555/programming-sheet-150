function power(base, exponent) {
  let power = 1;
  for (let i = 0; i < exponent; i++) {
    power = power * base;
  }

  return power;
}

console.log(power(10, 3));
