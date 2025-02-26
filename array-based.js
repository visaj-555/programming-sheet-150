function findLargestAndSmallest(arr) {
  let largest = arr[0],
    smallest = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) largest = arr[i];
    if (arr[i] < smallest) smallest = arr[i];
  }

  return { largest, smallest };
}

console.log(findLargestAndSmallest([3, 7, 2, 8, 5])); // { largest: 8, smallest: 2 }
console.log(findLargestAndSmallest([-5, 10, 0, 99])); // { largest: 99, smallest: -5 }

function sortArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}

console.log(sortArray([4, 2, 9, 1])); // [1, 2, 4, 9]
console.log(sortArray([10, 5, 3, 8])); // [3, 5, 8, 10]

function sumArray(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum;
}

console.log(sumArray([1, 2, 3, 4])); // 10
console.log(sumArray([-1, 10, 5, -3])); // 11

function findMissingNumber(arr) {
  let n = arr.length + 1;
  let expectedSum = (n * (n + 1)) / 2;
  let actualSum = 0;

  for (let i = 0; i < arr.length; i++) {
    actualSum += arr[i];
  }

  return expectedSum - actualSum;
}

console.log(findMissingNumber([1, 2, 3, 5])); // 4
console.log(findMissingNumber([1, 3, 4, 5])); // 2
