// Array Methods Demonstration

console.log("1. .values() ==> : ");
const valuesArray = ["a", "b", "c"];
console.log(Array.from(valuesArray.values()));

console.log("\n2. .length ==> : ");
console.log([1, 2, 3, 4, 5].length);

console.log("\n3. .reverse() ==> : ");
const reverseArray = [1, 2, 3];
console.log(reverseArray.reverse());

console.log("\n4. .sort() ==> : ");
const sortArray = [3, 1, 4, 1, 5, 9];
console.log(sortArray.sort());

console.log("\n5. .at() ==> : ");
console.log([1, 2, 3, 4, 5].at(-1));

console.log("\n6. .fill() ==> : ");
console.log([1, 2, 3, 4, 5].fill(0));

console.log("\n7. Array.from() ==> : ");
console.log(Array.from("hello"));

console.log("\n8. .join() ==> : ");
console.log(["a", "b", "c"].join("-"));

console.log("\n9. .toString() ==> : ");
console.log([1, 2, 3].toString());

console.log("\n10. .pop() ==> : ");
const popArray = [1, 2, 3];
console.log(popArray.pop());
console.log(popArray);

console.log("\n11. .forEach() ==> : ");
[1, 2, 3].forEach((num) => console.log(num));

console.log("\n12. .shift() ==> : ");
const shiftArray = [1, 2, 3];
console.log(shiftArray.shift());
console.log(shiftArray);

console.log("\n13. .copyWithin() ==> : ");
console.log([1, 2, 3, 4, 5].copyWithin(0, 3));

console.log("\n14. .push() ==> : ");
const pushArray = [1, 2, 3];
pushArray.push(4);
console.log(pushArray);

console.log("\n15. .unshift() ==> : ");
const unshiftArray = [2, 3];
unshiftArray.unshift(1);
console.log(unshiftArray);

console.log("\n16. .concat() ==> : ");
console.log([1, 2].concat([3, 4]));

console.log("\n17. .some() ==> : ");
console.log([1, 2, 3, 4].some((num) => num > 3));

console.log("\n18. .splice() ==> : ");
const spliceArray = [1, 2, 3, 4, 5];
spliceArray.splice(2, 1);
console.log(spliceArray);

console.log("\n19. .flat() ==> : ");
console.log([1, [2, 3], [4, [5, 6]]].flat(2));

console.log("\n20. .lastIndexOf() ==> : ");
console.log([1, 2, 3, 2, 1].lastIndexOf(2));

console.log("\n21. Array.of() ==> : ");
console.log(Array.of(1, 2, 3));

console.log("\n22. .every() ==> : ");
console.log([1, 2, 3, 4].every((num) => num < 5));

console.log("\n23. .slice() ==> : ");
console.log([1, 2, 3, 4, 5].slice(1, 4));

console.log("\n24. .flatMap() ==> : ");
console.log([1, 2, 3].flatMap((x) => [x, x * 2]));

console.log("\n25. .findIndex() ==> : ");
console.log([1, 2, 3, 4].findIndex((num) => num > 2));

console.log("\n26. .find() ==> : ");
console.log([1, 2, 3, 4].find((num) => num > 2));

console.log("\n27. .includes() ==> : ");
console.log([1, 2, 3].includes(2));

console.log("\n28. .entries() ==> : ");
console.log(Array.from(["a", "b", "c"].entries()));

console.log("\n29. .reduceRight() ==> : ");
console.log([1, 2, 3, 4].reduceRight((acc, curr) => acc + curr));

console.log("\n30. .reduce() ==> : ");
console.log([1, 2, 3, 4].reduce((acc, curr) => acc + curr));

console.log("\n31. Array.isArray() ==> : ");
console.log(Array.isArray([1, 2, 3]));

console.log("\n32. .filter() ==> : ");
console.log([1, 2, 3, 4].filter((num) => num > 2));

console.log("\n33. .keys() ==> : ");
console.log(Array.from(["a", "b", "c"].keys()));

console.log("\n34. .map() ==> : ");
console.log([1, 2, 3].map((x) => x * 2));
