function median(arr) {
  let arr3 = [...arr];
  let length = arr3.length;

  if (length == 0) {
    return undefined;
  }

  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length - 1; j++)
      if (arr3[j] > arr3[j + 1]) {
        let temp = arr3[j];
        arr3[j] = arr3[j + 1];
        arr3[j + 1] = temp;
      }
  }
  let med = Math.floor(length / 2);
  console.log(arr3[med]);
}

median([3, 1, 2, 4, 5]);
