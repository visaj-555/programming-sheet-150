function secondSmallest(arr) {
  const temp = arr.sort((a, b) => a - b);

  const arr2 = new Set(temp);

  const uniqueSortedArray = [...arr2];

  console.log(uniqueSortedArray[1]);
}

secondSmallest([12, 13, 1, 10, 34, 1]);
