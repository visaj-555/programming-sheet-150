function productDivisors(num1, num2) {
  let arr = [];
  product = num1 * num2;

  for (let i = 1; i < product; i++) {
    if (product % i == 0) {
      arr.push(i);
    }
  }

  console.log(arr);
}

productDivisors(6, 10);
