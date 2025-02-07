function countVowelsAndConsonants(str) {
  // Convert to lowercase for uniformity
  str = str.toLowerCase();

  // Define vowels
  const vowels = "aeiou";
  let vowelCount = 0,
    consonantCount = 0;

  // Loop through each character
  for (let char of str) {
    if (vowels.includes(char)) {
      vowelCount++;
    } else if (char >= "a" && char <= "z") {
      consonantCount++;
    }
  }

  console.log(`Vowels: ${vowelCount}, Consonants: ${consonantCount}`);
}

// Example usage
countVowelsAndConsonants("hello world");
