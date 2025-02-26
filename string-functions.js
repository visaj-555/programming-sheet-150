console.log("1. .charAt() ==> : Returns character at specified index");
console.log("Syntax: string.charAt(index)");
console.log("Hello".charAt(1));

console.log("\n2. .charCodeAt() ==> : Returns Unicode of character at index");
console.log("Syntax: string.charCodeAt(index)");
console.log("Hello".charCodeAt(1));

console.log("\n3. .concat() ==> : Combines strings into one");
console.log("Syntax: string.concat(string1[, string2, ...])");
console.log("Hello".concat(" ", "World"));

console.log("\n4. .includes() ==> : Checks if string contains substring");
console.log("Syntax: string.includes(searchString[, position])");
console.log("Hello World".includes("World"));

console.log("\n5. .endsWith() ==> : Checks if string ends with substring");
console.log("Syntax: string.endsWith(searchString[, length])");
console.log("Hello".endsWith("lo"));

console.log("\n6. .indexOf() ==> : Returns first index of substring");
console.log("Syntax: string.indexOf(searchString[, fromIndex])");
console.log("Hello Hello".indexOf("Hello"));

console.log("\n7. .lastIndexOf() ==> : Returns last index of substring");
console.log("Syntax: string.lastIndexOf(searchString[, fromIndex])");
console.log("Hello Hello".lastIndexOf("Hello"));

console.log("\n8. .match() ==> : Returns matches for a regex pattern");
console.log("Syntax: string.match(regexp)");
console.log("Hello123".match(/[0-9]+/));

console.log("\n9. .repeat() ==> : Repeats string specified number of times");
console.log("Syntax: string.repeat(count)");
console.log("Hi ".repeat(3));

console.log("\n10. .replace() ==> : Replaces first match with new string");
console.log("Syntax: string.replace(searchValue, replaceValue)");
console.log("Hello World".replace("World", "There"));

console.log("\n11. .search() ==> : Returns index of regex match");
console.log("Syntax: string.search(regexp)");
console.log("Hello123".search(/[0-9]/));

console.log("\n12. .slice() ==> : Extracts portion of string");
console.log("Syntax: string.slice(start[, end])");
console.log("Hello World".slice(0, 5));

console.log("\n13. .split() ==> : Splits string into array");
console.log("Syntax: string.split([separator[, limit]])");
console.log("Hello World".split(" "));

console.log("\n14. .startsWith() ==> : Checks if string starts with substring");
console.log("Syntax: string.startsWith(searchString[, position])");
console.log("Hello".startsWith("He"));

console.log("\n15. .substring() ==> : Returns string between two indices");
console.log("Syntax: string.substring(start[, end])");
console.log("Hello World".substring(6, 11));

console.log("\n16. .toLowerCase() ==> : Converts string to lowercase");
console.log("Syntax: string.toLowerCase()");
console.log("HELLO".toLowerCase());

console.log("\n17. .toUpperCase() ==> : Converts string to uppercase");
console.log("Syntax: string.toUpperCase()");
console.log("hello".toUpperCase());

console.log("\n18. .trim() ==> : Removes whitespace from both ends");
console.log("Syntax: string.trim()");
console.log("   Hello   ".trim());

console.log("\n19. .trimStart() ==> : Removes whitespace from start");
console.log("Syntax: string.trimStart()");
console.log("   Hello".trimStart());

console.log("\n20. .trimEnd() ==> : Removes whitespace from end");
console.log("Syntax: string.trimEnd()");
console.log("Hello    ".trimEnd());

console.log("\n21. .padStart() ==> : Pads start with specified character");
console.log("Syntax: string.padStart(targetLength[, padString])");
console.log("5".padStart(3, "0"));

console.log("\n22. .padEnd() ==> : Pads end with specified character");
console.log("Syntax: string.padEnd(targetLength[, padString])");
console.log("5".padEnd(3, "0"));

console.log(
  "\n23. .at() ==> : Returns character at specified index (supports negative)"
);
console.log("Syntax: string.at(index)");
console.log("Hello".at(-1));

console.log(
  "\n24. String.fromCharCode() ==> : Creates string from Unicode values"
);
console.log("Syntax: String.fromCharCode(num1[, num2, ...])");
console.log(String.fromCharCode(72, 101, 108, 108, 111));

console.log("\n25. .replaceAll() ==> : Replaces all matches with new string");
console.log("Syntax: string.replaceAll(searchValue, replaceValue)");
console.log("Hello Hello".replaceAll("Hello", "Hi"));
