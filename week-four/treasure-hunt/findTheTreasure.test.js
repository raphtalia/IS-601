const Direction = require("./direction");
const Instruction = require("./instruction");
const { findTheTreasure, moveForward, turnLeft, turnRight } = require("./findTheTreasure");

describe("findTheTreasure", () => {
  describe("moveForward", () => {
    test.each([
      [0, 0, Direction.NORTH, { position: [0, 1], direction: Direction.NORTH }],
      [0, 0, Direction.SOUTH, { position: [0, -1], direction: Direction.SOUTH }],
      [0, 0, Direction.EAST, { position: [1, 0], direction: Direction.EAST }],
      [0, 0, Direction.WEST, { position: [-1, 0], direction: Direction.WEST }],
      [0, 0, "Wrong", { position: [0, 0], direction: "Wrong" }],
    ])("WHEN position is (%j, %j), %j THEN it returns %j", (x, y, direction, expected) => {
      expect(moveForward(x, y, direction)).toEqual(expected);
    });
  });

  describe("turnLeft", () => {
    test.each([
      [0, 0, Direction.NORTH, { position: [0, 0], direction: Direction.WEST }],
      [0, 0, Direction.SOUTH, { position: [0, 0], direction: Direction.EAST }],
      [0, 0, Direction.EAST, { position: [0, 0], direction: Direction.NORTH }],
      [0, 0, Direction.WEST, { position: [0, 0], direction: Direction.SOUTH }],
      [0, 0, "Wrong", { position: [0, 0], direction: "Wrong" }],
    ])("WHEN position is (%j, %j), %j THEN it returns %j", (x, y, direction, expected) => {
      expect(turnLeft(x, y, direction)).toEqual(expected);
    });
  });

  describe("turnRight", () => {
    test.each([
      [0, 0, Direction.NORTH, { position: [0, 0], direction: Direction.EAST }],
      [0, 0, Direction.SOUTH, { position: [0, 0], direction: Direction.WEST }],
      [0, 0, Direction.EAST, { position: [0, 0], direction: Direction.SOUTH }],
      [0, 0, Direction.WEST, { position: [0, 0], direction: Direction.NORTH }],
      [0, 0, "Wrong", { position: [0, 0], direction: "Wrong" }],
    ])("WHEN position is (%j, %j), %j THEN it returns %j", (x, y, direction, expected) => {
      expect(turnRight(x, y, direction)).toEqual(expected);
    });
  });

  describe("findTheTreasure", () => {
    test.each([
      [0, 0, Direction.NORTH, [], { position: [0, 0], direction: Direction.NORTH }],
      [
        0,
        0,
        Direction.NORTH,
        [
          Instruction.FORWARD,
          Instruction.RIGHT,
          Instruction.FORWARD,
          Instruction.FORWARD,
          Instruction.LEFT,
          Instruction.FORWARD,
        ],
        { position: [2, 2], direction: Direction.NORTH },
      ],
      [
        0,
        0,
        Direction.SOUTH,
        [Instruction.FORWARD, Instruction.FORWARD, Instruction.RIGHT, Instruction.RIGHT],
        { position: [0, -2], direction: Direction.NORTH },
      ],
      [
        0,
        0,
        Direction.WEST,
        [
          Instruction.FORWARD,
          Instruction.FORWARD,
          Instruction.RIGHT,
          Instruction.RIGHT,
          Instruction.FORWARD,
          Instruction.FORWARD,
        ],
        { position: [0, 0], direction: Direction.EAST },
      ],
    ])(
      "WHEN position is (%j, %j), %j with instructions %j THEN it returns %j",
      (x, y, direction, instructions, expected) => {
        expect(findTheTreasure([x, y], direction, instructions)).toEqual(expected);
      }
    );
  });
});
