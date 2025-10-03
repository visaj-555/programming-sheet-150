function pairElements(arr, target) {
  let pairs = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] == target) {
        pairs.push([arr[i], arr[j]]);
      }
    }
  }

  return pairs;
}

function pairElements(arr, target) {
  let pairs = [];
  let seen = new Set();

  for (let num of arr) {
    let complement = target - num;

    if (seen.has(complement)) {
      pairs.push([complement, num]);
    }
    seen.add(num);
  }

  return pairs;
}

console.log(pairElements([1, 2, 3, 4, 5], 5));

// Input: array = [1, 2, 3, 4, 5], target = 5
// Output: [(1, 4), (2, 3)]
