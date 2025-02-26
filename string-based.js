function isPalindrome(str) {
  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false;
    }
  }
  return true;
}

console.log(isPalindrome("racecar"));
console.log(isPalindrome("hello"));

function reverseString(str) {
  let reversed = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }

  return reversed;
}

console.log(reverseString("hello"));
console.log(reverseString("world"));

function isAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;

  let count1 = {},
    count2 = {};

  for (let i = 0; i < str1.length; i++) {
    let char1 = str1[i],
      char2 = str2[i];

    count1[char1] = (count1[char1] || 0) + 1;
    count2[char2] = (count2[char2] || 0) + 1;
  }

  for (let key in count1) {
    if (count1[key] !== count2[key]) return false;
  }

  return true;
}

console.log(isAnagram("listen", "silent"));
console.log(isAnagram("hello", "world"));

function countVowelsAndConsonants(str) {
  let vowels = 0,
    consonants = 0;
  let vowelSet = "aeiouAEIOU";

  for (let i = 0; i < str.length; i++) {
    let char = str[i];

    if ((char >= "a" && char <= "z") || (char >= "A" && char <= "Z")) {
      if (vowelSet.includes(char)) {
        vowels++;
      } else {
        consonants++;
      }
    }
  }

  return { vowels, consonants };
}

console.log(countVowelsAndConsonants("hello"));
console.log(countVowelsAndConsonants("world"));

function countDigitOccurrence(num, digit) {
  let count = 0;
  let str = "" + num;

  for (let i = 0; i < str.length; i++) {
    if (str[i] == digit) count++;
  }

  return count;
}

console.log(countDigitOccurrence(123456789123, 1));
console.log(countDigitOccurrence(11111, 1));

function longestPalindrome(s) {
  let start = 0,
    maxLength = 0;

  for (let i = 0; i < s.length; i++) {
    let left = i,
      right = i;

    while (left >= 0 && right < s.length && s[left] === s[right]) {
      if (right - left + 1 > maxLength) {
        start = left;
        maxLength = right - left + 1;
      }
      left--;
      right++;
    }

    (left = i), (right = i + 1);

    while (left >= 0 && right < s.length && s[left] === s[right]) {
      if (right - left + 1 > maxLength) {
        start = left;
        maxLength = right - left + 1;
      }
      left--;
      right++;
    }
  }

  return s.slice(start, start + maxLength);
}

console.log(longestPalindrome("abaxyzzyxf"));
console.log(longestPalindrome("racecar"));

function removeDuplicates(str) {
  let unique = "";
  for (let i = 0; i < str.length; i++) {
    let found = false;
    for (let j = 0; j < unique.length; j++) {
      if (str[i] === unique[j]) {
        found = true;
        break;
      }
    }
    if (!found) unique += str[i];
  }
  return unique;
}

// Example:
console.log(removeDuplicates("programming")); // Output: "progamin"

function firstNonRepeatingChar(str) {
  for (let i = 0; i < str.length; i++) {
    let count = 0;
    for (let j = 0; j < str.length; j++) {
      if (str[i] === str[j]) count++;
    }
    if (count === 1) return str[i];
  }
  return "No unique character";
}

// Example:
console.log(firstNonRepeatingChar("swiss")); // Output: "w"

function longestWord(sentence) {
  let word = "",
    longest = "";
  for (let i = 0; i <= sentence.length; i++) {
    if (sentence[i] === " " || i === sentence.length) {
      if (word.length > longest.length) longest = word;
      word = "";
    } else {
      word += sentence[i];
    }
  }
  return longest;
}

// Example:
console.log(longestWord("The quick brown fox jumps over the lazy dog")); // Output: "jumps"

function reverseWords(sentence) {
  let word = "",
    result = "";
  for (let i = 0; i <= sentence.length; i++) {
    if (sentence[i] === " " || i === sentence.length) {
      let reversed = "";
      for (let j = word.length - 1; j >= 0; j--) {
        reversed += word[j];
      }
      result += reversed + (i === sentence.length ? "" : " ");
      word = "";
    } else {
      word += sentence[i];
    }
  }
  return result;
}

// Example:
console.log(reverseWords("hello world")); // Output: "olleh dlrow"
