function checkPalindrome(string) {
  let reversedString = "";
  for (let i = string.length - 1; i >= 0; i--) {
    reversedString += string[i];
  }
  return string === reversedString;
}

function countSubstrings(s) {
  let count = 0;

  for (let start = 0; start < s.length; start++) {
    for (let end = start; end < s.length; end++) {
      let substring = s.slice(start, end + 1);
      if (checkPalindrome(substring)) {
        count++;
      }
    }
  }

  return count;
}

function countSubstrings(s) {
  let count = 0;

  function expandAroundCenter(left, right) {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      count++;
      left--;
      right++;
    }
  }

  for (let i = 0; i < s.length; i++) {
    expandAroundCenter(i, i);
    expandAroundCenter(i, i + 1);
  }

  return count;
}

console.log(countSubstrings("aaa"));
console.log(countSubstrings("hello"));
