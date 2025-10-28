function randomSquareMatrix(size) {
  let matrix = [];

  for (let i = 0; i < size; i++) {
    let row = [];
    for (let j = 0; j < size; j++) {
      let randomNum = Math.floor(Math.random() * 9) + 1;
      row.push(randomNum);
    }
    matrix.push(row);
  }

  for (let r of matrix) console.log(...r);
}

randomSquareMatrix(3);
