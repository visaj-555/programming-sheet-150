function longestSubstring(s) {
  let longest = "";

  for (let i = 0; i < s.length; i++) {
    let seen = new Set();
    let current = "";

    for (let j = i; j < s.length; j++) {
      if (seen.has(s[j])) {
        break;
      }
      seen.add(s[j]);
      current += s[j];

      if (current.length > longest.length) {
        longest = current;
      }
    }
  }

  return longest;
}

console.log(longestSubstring("abcabcbb"));
console.log(longestSubstring("bbbbb"));
console.log(longestSubstring("pwwkew"));
