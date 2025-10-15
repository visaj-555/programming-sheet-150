function sumOfProduct(num1, num2) {
  let product = num1 * num2;
  let sum = 0;

  //console.log("Product : " + product);

  productArray = Array.from(String(product), Number);

  //console.log("productArray : " + productArray);

  for (let i = 0; i < productArray.length; i++) {
    sum += productArray[i];
  }

  return sum;
}

console.log(sumOfProduct(12, 34));
