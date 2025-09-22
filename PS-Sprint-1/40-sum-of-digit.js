function sumOfDigit(n) {
  if (n < 10) {
    return n;
  }

  let sum = 0;
  let nums = String(n);
  for (let i = 0; i < nums.length; i++) {
    sum += parseInt(nums[i]);
  }

  return sumOfDigit(sum);
}

console.log(sumOfDigit(9875));
