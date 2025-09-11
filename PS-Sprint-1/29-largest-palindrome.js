function largestPalindrome(string) {
  let n = string.length;
  let startIndex = 0;
  let maxLength = 0;
  let strArray = "";

  for (startIndex = 0; startIndex < n; startIndex++) {
    for (let i = startIndex + 1; i <= n; i++) {
      let str = string.slice(startIndex, i);

      if (str.split("").reverse().join("") == str) {
        if (str.length > maxLength) {
          maxLength = str.length;
          strArray = str;
        }
      }
    }
  }
  return strArray;
}

console.log(largestPalindrome("babad"));
