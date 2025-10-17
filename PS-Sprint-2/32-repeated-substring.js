function repeatedSubstringPattern(s) {
  let doubleStr = s + s;
  let str = doubleStr.slice(1, -1);

  if (str.includes(s)) {
    return true;
  } else {
    return false;
  }
}

console.log(repeatedSubstringPattern("abcd"));
