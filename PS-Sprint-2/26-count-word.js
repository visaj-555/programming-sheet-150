function countWord(str) {
  const words = str.split(" ");

  for (let i = 0; i < str.length; i++) {
    let count = 0;
    for (let j = 0; j < str.length; j++) {
      if (words[i] == words[j]) {
        count++;
      }
    }

    return count;
  }
}

console.log(countWord("hello string hello"));
