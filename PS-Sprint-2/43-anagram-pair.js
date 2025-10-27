function anagramPair(words) {
  let pairs = [];

  for (let i = 0; i < words.length; i++) {
    for (let j = i + 1; j < words.length; j++) {
      let word1 = words[i].split("").sort().join("");
      let word2 = words[j].split("").sort().join("");

      if (word1 === word2) {
        pairs.push([words[i], words[j]]);
      }
    }
  }

  return pairs;
}

console.log(anagramPair(["listen", "silent", "hello", "world"]));
