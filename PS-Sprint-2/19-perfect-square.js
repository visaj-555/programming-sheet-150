function perfectSquare(start, end) {
  let arr = [];
  let temp;

  for (let i = start; i < end; i++) {
    temp = 0;
    temp = i * i;
    if (temp <= end) {
      arr.push(temp);
    }
  }

  return arr;
}

console.log(perfectSquare(1, 10));
