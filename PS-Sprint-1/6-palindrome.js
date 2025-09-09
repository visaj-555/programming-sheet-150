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

const string = "bob";
const value = checkPalindrome(string);
console.log(value);
