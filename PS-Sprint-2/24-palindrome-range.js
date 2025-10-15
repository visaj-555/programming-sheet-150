function checkPalindrome(string) {
  let reversedString = "";

  for (let i = string.length - 1; i >= 0; i--) {
    reversedString += string[i];
  }

  if (string === reversedString) {
    return "It is a palindrome";
  } else {
    return "It is not a palindrome";
  }
}

function palindromeRange(num1, num2) {
  let arr = [];

  for (let i = num1; i < num2; i++) {
    if (checkPalindrome(i)) {
      arr.push(i);
    }
  }

  return arr;
}

console.log(palindromeRange(1, 100));
