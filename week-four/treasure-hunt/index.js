const Direction = require("./direction");
const Instruction = require("./instruction");
const { findTheTreasure } = require("./findTheTreasure");

console.log(
  findTheTreasure([0, 0], Direction.NORTH, [
    Instruction.FORWARD,
    Instruction.FORWARD,
    Instruction.LEFT,
    Instruction.FORWARD,
    Instruction.FORWARD,
    Instruction.LEFT,
  ])
);
