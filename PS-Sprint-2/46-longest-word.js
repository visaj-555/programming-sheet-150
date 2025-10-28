function longestWordLength(str) {
  let words = str.split(" ");

  let maxLength = 0;

  for (let word of words) {
    if (word.length > maxLength) {
      maxLength = word.length;
    }
  }

  return maxLength;
}

console.log(longestWordLength("Find the longest word"));
