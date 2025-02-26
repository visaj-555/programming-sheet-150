function bubbleSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
}

let arr = [64, 34, 25, 12, 22, 11, 90];
bubbleSort(arr);
console.log("Bubble Sort :", arr);

function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i; // Return index of found element
    }
  }
  return -1; // Not found
}

// Example:
let numbers = [10, 20, 30, 40, 50];
console.log("Found at index:", linearSearch(numbers, 30)); // Output: 2
console.log("Found at index:", linearSearch(numbers, 100)); // Output: -1

function binarySearch(arr, target) {
  let left = 0,
    right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) return mid;
    else if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }

  return -1; // Not found
}

// Example:
let sortedArr = [10, 20, 30, 40, 50, 60, 70];
console.log("Found at index:", binarySearch(sortedArr, 40)); // Output: 3
console.log("Found at index:", binarySearch(sortedArr, 100)); // Output: -1

function selectionSort(arr1) {
  let n = arr1.length;
  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < n; j++) {
      if (arr1[j] < arr1[minIndex]) {
        minIndex = j;
      }
    }
    let temp = arr1[i];
    arr1[i] = arr1[minIndex];
    arr1[minIndex] = temp;
  }
}

// Example:
let arr1 = [29, 10, 14, 37, 13];
selectionSort(arr1);
console.log("Sorted Array:", arr1);

function insertionSort(arr) {
  let n = arr.length;
  for (let i = 1; i < n; i++) {
    let key = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = key;
  }
}

// Example:
let numbers = [12, 11, 13, 5, 6];
insertionSort(numbers);
console.log("Sorted Array:", numbers);

function twoSum(arr, target) {
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (arr[i] + arr[j] === target) {
        return [i, j]; // Return indexes of the two numbers
      }
    }
  }
  return [-1, -1]; // Not found
}

// Example:
let nums = [2, 7, 11, 15];
console.log("Indexes:", twoSum(nums, 9)); // Output: [0, 1]

function findMissingNumber(arr, n) {
  let expectedSum = (n * (n + 1)) / 2;
  let actualSum = 0;
  for (let i = 0; i < arr.length; i++) {
    actualSum += arr[i];
  }
  return expectedSum - actualSum;
}

// Example:
let missingArr = [1, 2, 4, 5, 6]; // Missing 3
console.log("Missing Number:", findMissingNumber(missingArr, 6)); // Output: 3

function majorityElement(arr) {
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    let count = 0;
    for (let j = 0; j < n; j++) {
      if (arr[j] === arr[i]) {
        count++;
      }
    }
    if (count > n / 2) return arr[i];
  }
  return -1; // No majority element
}

// Example:
let majorityArr = [3, 3, 4, 2, 3, 3, 3];
console.log("Majority Element:", majorityElement(majorityArr)); // Output: 3

function firstAndLastOccurrence(arr, target) {
  let first = -1,
    last = -1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      if (first === -1) first = i;
      last = i;
    }
  }
  return [first, last];
}

// Example:
let sortedNums = [2, 4, 4, 4, 6, 7, 7, 9];
console.log("First & Last Occurrence:", firstAndLastOccurrence(sortedNums, 4)); // Output: [1, 3]

function countFrequency(arr) {
  let n = arr.length;
  let visited = new Array(n).fill(false);

  for (let i = 0; i < n; i++) {
    if (visited[i]) continue;

    let count = 1;
    for (let j = i + 1; j < n; j++) {
      if (arr[i] === arr[j]) {
        count++;
        visited[j] = true;
      }
    }
    console.log(arr[i] + " appears " + count + " times");
  }
}

// Example:
let freqArr = [1, 2, 2, 3, 3, 3, 4];
countFrequency(freqArr);
