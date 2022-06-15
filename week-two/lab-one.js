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

function formatCost(numLemonades, cost) {
  return `${numLemonades} lemonade${numLemonades > 1 ? "s" : ""} will cost ${cost} cents`;
}

function printCost(numLemonades) {
  console.log(formatCost(numLemonades, costOfLemonade(numLemonades)));
}

printCost(1); // 100
printCost(4); // 400
printCost(5); // 475
printCost(9); // 855
printCost(10); // 900
printCost(100); // 9000

printCost([]); // ERROR
printCost(-1); // ERROR
