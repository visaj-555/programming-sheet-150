function sumOfNumbers(str) {
  return (str.match(/\d+/g) || []).map(Number).reduce((a, b) => a + b, 0);
}

function sumOfNumbers(str) {
  let sum = 0,
    num = "";
  for (let ch of str) {
    if (!isNaN(ch) && ch !== " ") num += ch;
    else if (num) (sum += +num), (num = "");
  }
  return sum + (+num || 0);
}

console.log(sumOfNumbers("The numbers are 12 and 34"));
