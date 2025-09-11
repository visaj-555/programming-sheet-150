function missingNumbers(arr) {
  let arr2 = [];
  for (let i = 1; i <= Math.max(...arr); i++) {
    if (!arr.includes(i)) {
      arr2.push(i);
    }
  }

  return arr2;
}

console.log(missingNumbers([1, 2, 4, 5, 6, 8, 10]));
// Input: sequence = [1, 2, 4, 5]
// Output: [3]
