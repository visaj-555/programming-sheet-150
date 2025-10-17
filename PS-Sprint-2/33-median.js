function median(arr) {
  let sorted = arr.sort((a, b) => a - b);

  let n = sorted.length;
  let mid = Math.floor(n / 2);

  if (n % 2 === 0) {
    return (sorted[mid - 1] + sorted[mid]) / 2;
  } else {
    return sorted[mid];
  }
}

median([3, 1, 4, 1, 5]);

// Input: list = [3, 1, 4, 1, 5]
// Output: 3
