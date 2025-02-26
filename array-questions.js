//====================== LARGEST AND SMALLEST  ======================//

function findLargestAndSmallest(arr) {
  let largest = arr[0],
    smallest = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) largest = arr[i];
    if (arr[i] < smallest) smallest = arr[i];
  }

  return { largest, smallest };
}

console.log("Largest and smallest : ", findLargestAndSmallest([3, 7, 2, 8, 5]));

//====================== SORTING  ======================//

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

console.log("Sorting Array : ", sortArray([4, 2, 9, 1]));

//====================== SUM OF ARRAY  ======================//

function sumArray(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum;
}

console.log("Sum of Array : ", sumArray([1, 2, 3, 4]));

//====================== FIND MISSING NUMBER  ======================//

function findMissingNumber(arr) {
  let n = arr.length + 1;
  let expectedSum = (n * (n + 1)) / 2;
  let actualSum = 0;

  for (let i = 0; i < arr.length; i++) {
    actualSum += arr[i];
  }

  return expectedSum - actualSum;
}

console.log("Find Missing Number : ", findMissingNumber([1, 2, 3, 5]));
