function longestConsecutiveNumber(arr) {
  let arr2 = arr.sort((a, b) => a - b);
  let count = 0;

  for (let i = 0; i < arr2.length; i++) {
    for (let j = 1; j < arr2.length; j++) {
      if (arr2[j] - 1 == arr2[i]) {
        count++;
      }
    }
    return count;
  }
}

console.log(longestConsecutiveNumber([100, 4, 200, 1, 3, 2]));
