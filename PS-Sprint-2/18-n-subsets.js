// 78. Subsets

function getPowerSet(nums) {
  const n = nums.length;

  const subsets = 1 << n;

  const ans = [];

  for (let num = 0; num < subsets; num++) {
    const subset = [];

    for (let i = 0; i < n; i++) {
      if (num & (1 << i)) {
        subset.push(nums[i]);
      }
    }

    ans.push(subset);
  }

  return ans;
}

const nums = [1, 2, 3];
const subsets = getPowerSet(nums);
console.log("Initial Input Array: " + nums.join(" "));
console.log("Subsets: ");
for (const subset of subsets) {
  console.log("[ " + subset.join(" ") + " ]");
}

// Striver
