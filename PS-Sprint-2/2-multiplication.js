function multiplication(start, end) {
  for (let i = start; i <= end; i++) {
    for (let j = 1; j <= 10; j++) {
      console.log(i + "x" + j + " = " + i * j);
    }
  }
}

console.log(multiplication(2, 4));
