#!/usr/bin/env node

const input = [1, 2, 3];

// [0] = odds
// [1] = evens
const output = input.reduce(
  (nums, num) => {
    nums[num % 2 === 0 ? 1 : 0].push(num);
    return nums;
  },
  [[], []]
);

console.log(output);
