function computation(num, value) {
  arr = Array.from(String(num), Number);
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > value) {
      count++;
    }
  }

  return count;
}

console.log(computation(54321, 3));
