function isArmstrong(num) {
  let sum = 0;
  let temp = num;
  let digits = num.toString().length;

  while (temp > 0) {
    let digit = temp % 10;
    sum += Math.pow(digit, digits);
    temp = Math.floor(temp / 10);
  }

  return sum === num;
}

function findArmstrongNumbers(range) {
  let result = [];
  for (let i = range[0]; i <= range[1]; i++) {
    if (isArmstrong(i)) {
      result.push(i);
    }
  }
  return result;
}

let range = [1, 500];
console.log(
  `Armstrong numbers in range ${range}:`,
  findArmstrongNumbers(range)
);
