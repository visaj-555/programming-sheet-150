function findLargestAndSmallest(arr) {
  let largest = arr[0]; // Assume first element is largest
  let smallest = arr[0]; // Assume first element is smallest

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i]; // Update largest if current element is greater
    }
    if (arr[i] < smallest) {
      smallest = arr[i]; // Update smallest if current element is smaller
    }
  }

  console.log(`Largest: ${largest}, Smallest: ${smallest}`);
}

// Example usage
findLargestAndSmallest([4, 7, 1, 8, 5]);
