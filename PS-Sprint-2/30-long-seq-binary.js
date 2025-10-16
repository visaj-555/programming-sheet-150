function longSequenceBinary(arr) {
  maxCount = 0;
  count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 1) {
      count++;
      maxCount = count;
    } else {
      count = 0;
    }
  }

  return maxCount;
}

console.log(longSequenceBinary([1, 1, 0, 1, 1, 1]));

// Input: array = [1, 1, 0, 1, 1, 1]
// Output: 3
