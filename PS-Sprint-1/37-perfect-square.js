function perfectSquare(n) {
  let end = n / 2;
  for (let i = 1; i <= end; i++) {
    if (i * i == n) {
      return true;
    } else {
      return false;
    }
  }
}

console.log(perfectSquare(15));
