function longestConsecutiveNumber(arr) {
  if (arr.length === 0) {
    return 0;
  }

  let arr2 = arr.sort((a, b) => a - b);
  let maxCount = 1;
  let currentCount = 1;

  for (let i = 1; i < arr2.length; i++) {
    if (arr2[i] === arr2[i - 1]) {
      continue;
    }

    if (arr2[i] === arr2[i - 1] + 1) {
      currentCount++;
      maxCount = Math.max(maxCount, currentCount);
    } else {
      currentCount = 1;
    }
  }

  return maxCount;
}

function longestConsecutiveNumber(arr) {
  if (arr.length === 0) {
    return 0;
  }

  const numSet = new Set(arr);
  let maxCount = 0;

  for (let num of numSet) {
    if (!numSet.has(num - 1)) {
      let currentNum = num;
      let currentCount = 1;

      // Keep checking for consecutive numbers
      while (numSet.has(currentNum + 1)) {
        currentNum++;
        currentCount++;
      }

      maxCount = Math.max(maxCount, currentCount);
    }
  }

  return maxCount;
}

console.log(longestConsecutiveNumber([100, 4, 200, 1, 3, 2])); // 4
console.log(longestConsecutiveNumber([5])); // 1
console.log(longestConsecutiveNumber([])); // 0
console.log(longestConsecutiveNumber([1, 2, 3, 4])); // 4
console.log(longestConsecutiveNumber([1, 2, 2, 3, 4])); // 4
