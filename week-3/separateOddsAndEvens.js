#!/usr/bin/env node

// [0] = odds
// [1] = evens
function separateOddsAndEvens(inputs) {
  return inputs.reduce(
    (nums, num) => {
      nums[num % 2 === 0 ? 1 : 0].push(num);
      return nums;
    },
    [[], []]
  );
}

module.exports = { separateOddsAndEvens };
