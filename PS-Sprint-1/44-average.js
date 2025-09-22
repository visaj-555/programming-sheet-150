// 44. Finding the Average of Numbers in an Array

function Average(arr) {
  let sum = 0,
    avg = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    avg = Math.round(sum / arr.length);
  }

  return avg;
}

console.log(Average([1, 2, 3, 4, 5]));
