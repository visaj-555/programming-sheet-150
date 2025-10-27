function largestElement(arr) {
  let arr3 = [];
  for (let i = 0; i < arr.length; i++) {
    arr3.push(Math.max(...arr[i]));
  }

  console.log(arr3);
}

largestElement([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]);
