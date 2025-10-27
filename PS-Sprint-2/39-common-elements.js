function commonElements(arr1, arr2) {
  let arr3 = [];

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        arr3.push(arr1[i]);
      }
    }
  }
  c;
  console.log(arr3);
}

commonElements([1, 2, 3, 4], [3, 4, 5, 6]);
