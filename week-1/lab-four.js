#!/usr/bin/env node

function costOfLemonade(n) {
  if (isNaN(parseInt(n))) {
    throw new Error("n must be a number");
  }
  if (n < 0) {
    throw new Error("n must be greater than 0");
  }

  if (n < 5) {
    return n * 100;
  } else if (n < 10) {
    return n * 95;
  } else {
    return n * 90;
  }
}

console.log(costOfLemonade(1)); // 100
console.log(costOfLemonade(4)); // 400
console.log(costOfLemonade(5)); // 475
console.log(costOfLemonade(9)); // 855
console.log(costOfLemonade(10)); // 900
console.log(costOfLemonade(100)); // 9000

console.log(costOfLemonade([])); // ERROR
console.log(costOfLemonade(-1)); // ERROR
