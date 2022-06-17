#!/usr/bin/env node

// [0] = odds
// [1] = evens
module.exports = (inputs) =>
  inputs.reduce(
    (nums, num) => {
      nums[num % 2 === 0 ? 1 : 0].push(num);
      return nums;
    },
    [[], []]
  );
