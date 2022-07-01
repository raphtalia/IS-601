const Direction = require("./direction");
const Instruction = require("./instruction");
const { findTheTreasure, moveForward, turnLeft, turnRight } = require("./findTheTreasure");

describe("findTheTreasure", () => {
  describe("moveForward SHOULD returned forward location", () => {
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

  describe("turnLeft SHOULD return location rotated -90 degrees", () => {
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

  describe("turnRight SHOULD return location rotated 90 degrees", () => {
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
    describe("SHOULD take instructions", () => {
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

    describe("SHOULD console.log steps", () => {
      const spy = jest.spyOn(console, "log");

      findTheTreasure([0, 0], Direction.NORTH, [
        Instruction.FORWARD,
        Instruction.FORWARD,
        Instruction.LEFT,
        Instruction.FORWARD,
        Instruction.FORWARD,
        Instruction.LEFT,
      ]);

      // Instructions say to check for 5 calls though 7 console.logs occur?
      expect(spy).toHaveBeenCalledTimes(7);
      expect(spy).toHaveBeenCalledWith("Starting at (0, 0) facing North");
      expect(spy).toHaveBeenCalledWith("Moving North one pace to (0, 1)");
      expect(spy).toHaveBeenCalledWith("Moving North one pace to (0, 2)");
      expect(spy).toHaveBeenCalledWith("Turning left to face West");
      expect(spy).toHaveBeenCalledWith("Moving West one pace to (-1, 2)");
      expect(spy).toHaveBeenCalledWith("Moving West one pace to (-2, 2)");
      expect(spy).toHaveBeenCalledWith("Turning left to face South");

      spy.mockRestore();
    });
  });
});
