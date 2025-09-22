function anagram(str1, str2) {
  if (str1.length != str2.length) {
    return false;
  }

  for (let i = 0; i < str1.length; i++) {
    for (let j = 0; j < str2.length; j++) {
      if (str1[i] == str2[j]) {
        return true;
      }
    }
  }
}

console.log(anagram("silent", "listen"));
// console.log(anagram("visaj", "shivam"));
