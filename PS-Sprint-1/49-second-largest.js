function findSecondLargest(arr) {
  let max = -Infinity;
  let secondMax = -Infinity;

  for (let num of arr) {
    if (num > max) {
      secondMax = max;
      max = num;
    } else if (num > secondMax && num < max) {
      secondMax = num;
    }
  }

  return secondMax === -Infinity ? null : secondMax;
}

let arr = [10, 5, 8, 20, 3];
console.log(findSecondLargest(arr));
