#!/usr/bin/env node

function costOfLemonade(n) {
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
