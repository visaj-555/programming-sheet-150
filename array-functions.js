console.log("1. .values() ==> : Returns an iterator of array values");
console.log("Syntax: array.values()");
const valuesArray = ["a", "b", "c"];
console.log(Array.from(valuesArray.values()));

console.log("\n2. .length ==> : Returns the number of elements in an array");
console.log("Syntax: array.length");
console.log([1, 2, 3, 4, 5].length);

console.log("\n3. .reverse() ==> : Reverses the order of array elements");
console.log("Syntax: array.reverse()");
const reverseArray = [1, 2, 3];
console.log(reverseArray.reverse());

console.log("\n4. .sort() ==> : Sorts array elements in place");
console.log("Syntax: array.sort([compareFunction])");
const sortArray = [3, 1, 4, 1, 5, 9];
console.log(sortArray.sort());

console.log(
  "\n5. .at() ==> : Returns element at specified index (supports negative indices)"
);
console.log("Syntax: array.at(index)");
console.log([1, 2, 3, 4, 5].at(-1));

console.log("\n6. .fill() ==> : Fills array with a static value");
console.log("Syntax: array.fill(value[, start[, end]])");
console.log([1, 2, 3, 4, 5].fill(0));

console.log(
  "\n7. Array.from() ==> : Creates new array from array-like or iterable object"
);
console.log("Syntax: Array.from(arrayLike[, mapFn[, thisArg]])");
console.log(Array.from("hello"));

console.log("\n8. .join() ==> : Joins all elements into a string");
console.log("Syntax: array.join([separator])");
console.log(["a", "b", "c"].join("-"));

console.log("\n9. .toString() ==> : Returns string representation of array");
console.log("Syntax: array.toString()");
console.log([1, 2, 3].toString());

console.log("\n10. .pop() ==> : Removes and returns the last element");
console.log("Syntax: array.pop()");
const popArray = [1, 2, 3];
console.log(popArray.pop());
console.log(popArray);

console.log("\n11. .forEach() ==> : Executes function for each element");
console.log(
  "Syntax: array.forEach(callback(element[, index[, array]])[, thisArg])"
);
[1, 2, 3].forEach((num) => console.log(num));

console.log("\n12. .shift() ==> : Removes and returns the first element");
console.log("Syntax: array.shift()");
const shiftArray = [1, 2, 3];
console.log(shiftArray.shift());
console.log(shiftArray);

console.log(
  "\n13. .copyWithin() ==> : Copies part of array to another location in same array"
);
console.log("Syntax: array.copyWithin(target, start[, end])");
console.log([1, 2, 3, 4, 5].copyWithin(0, 3));

console.log("\n14. .push() ==> : Adds elements to end of array");
console.log("Syntax: array.push(element1[, ...[, elementN]])");
const pushArray = [1, 2, 3];
pushArray.push(4);
console.log(pushArray);

console.log("\n15. .unshift() ==> : Adds elements to beginning of array");
console.log("Syntax: array.unshift(element1[, ...[, elementN]])");
const unshiftArray = [2, 3];
unshiftArray.unshift(1);
console.log(unshiftArray);

console.log("\n16. .concat() ==> : Merges two or more arrays");
console.log("Syntax: array.concat(value1[, value2[, ...[, valueN]]])");
console.log([1, 2].concat([3, 4]));

console.log("\n17. .some() ==> : Tests if at least one element passes a test");
console.log(
  "Syntax: array.some(callback(element[, index[, array]])[, thisArg])"
);
console.log([1, 2, 3, 4].some((num) => num > 3));

console.log("\n18. .splice() ==> : Adds/removes elements from array");
console.log(
  "Syntax: array.splice(start[, deleteCount[, item1[, item2[, ...]]]])"
);
const spliceArray = [1, 2, 3, 4, 5];
spliceArray.splice(2, 1);
console.log(spliceArray);

console.log("\n19. .flat() ==> : Flattens nested arrays");
console.log("Syntax: array.flat([depth])");
console.log([1, [2, 3], [4, [5, 6]]].flat(2));

console.log("\n20. .lastIndexOf() ==> : Returns last index of specified value");
console.log("Syntax: array.lastIndexOf(searchElement[, fromIndex])");
console.log([1, 2, 3, 2, 1].lastIndexOf(2));

console.log("\n21. Array.of() ==> : Creates new array with given elements");
console.log("Syntax: Array.of(element0[, element1[, ...[, elementN]]])");
console.log(Array.of(1, 2, 3));

console.log("\n22. .every() ==> : Tests if all elements pass a test");
console.log(
  "Syntax: array.every(callback(element[, index[, array]])[, thisArg])"
);
console.log([1, 2, 3, 4].every((num) => num < 5));

console.log("\n23. .slice() ==> : Returns shallow copy of portion of array");
console.log("Syntax: array.slice([begin[, end]])");
console.log([1, 2, 3, 4, 5].slice(1, 4));

console.log("\n24. .flatMap() ==> : Maps each element and flattens result");
console.log(
  "Syntax: array.flatMap(callback(element[, index[, array]])[, thisArg])"
);
console.log([1, 2, 3].flatMap((x) => [x, x * 2]));

console.log(
  "\n25. .findIndex() ==> : Returns index of first element passing test"
);
console.log(
  "Syntax: array.findIndex(callback(element[, index[, array]])[, thisArg])"
);
console.log([1, 2, 3, 4].findIndex((num) => num > 2));

console.log("\n26. .find() ==> : Returns first element passing test");
console.log(
  "Syntax: array.find(callback(element[, index[, array]])[, thisArg])"
);
console.log([1, 2, 3, 4].find((num) => num > 2));

console.log("\n27. .includes() ==> : Checks if array contains specific value");
console.log("Syntax: array.includes(searchElement[, fromIndex])");
console.log([1, 2, 3].includes(2));

console.log("\n28. .entries() ==> : Returns iterator of array entries");
console.log("Syntax: array.entries()");
console.log(Array.from(["a", "b", "c"].entries()));

console.log("\n29. .reduceRight() ==> : Reduces array from right to left");
console.log(
  "Syntax: array.reduceRight(callback(accumulator, currentValue[, index[, array]])[, initialValue])"
);
console.log([1, 2, 3, 4].reduceRight((acc, curr) => acc + curr));

console.log("\n30. .reduce() ==> : Reduces array from left to right");
console.log(
  "Syntax: array.reduce(callback(accumulator, currentValue[, index[, array]])[, initialValue])"
);
console.log([1, 2, 3, 4].reduce((acc, curr) => acc + curr));

console.log("\n31. Array.isArray() ==> : Checks if value is an array");
console.log("Syntax: Array.isArray(value)");
console.log(Array.isArray([1, 2, 3]));

console.log("\n32. .filter() ==> : Creates array with elements passing test");
console.log(
  "Syntax: array.filter(callback(element[, index[, array]])[, thisArg])"
);
console.log([1, 2, 3, 4].filter((num) => num > 2));

console.log("\n33. .keys() ==> : Returns iterator of array indices");
console.log("Syntax: array.keys()");
console.log(Array.from(["a", "b", "c"].keys()));

console.log(
  "\n34. .map() ==> : Creates new array with results of calling function"
);
console.log(
  "Syntax: array.map(callback(element[, index[, array]])[, thisArg])"
);
console.log([1, 2, 3].map((x) => x * 2));
