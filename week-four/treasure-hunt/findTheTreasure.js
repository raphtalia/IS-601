const Direction = require("./direction");
const Instruction = require("./instruction");

const direction_heading = new Map();
direction_heading.set(Direction.NORTH, 0);
direction_heading.set(Direction.EAST, 90);
direction_heading.set(Direction.SOUTH, 180);
direction_heading.set(Direction.WEST, 270);

const heading_direction = new Map();
heading_direction.set(0, Direction.NORTH);
heading_direction.set(90, Direction.EAST);
heading_direction.set(180, Direction.SOUTH);
heading_direction.set(270, Direction.WEST);

function moveForward(x, y, direction) {
  switch (direction) {
    case Direction.NORTH:
      return { position: [x, y + 1], direction };
    case Direction.WEST:
      return { position: [x - 1, y], direction };
    case Direction.EAST:
      return { position: [x + 1, y], direction };
    case Direction.SOUTH:
      return { position: [x, y - 1], direction };
    default:
      return { position: [x, x], direction };
  }
}

function turnRight(x, y, direction) {
  if (!direction_heading.has(direction)) {
    return { position: [x, y], direction };
  }

  return {
    position: [x, y],
    direction: heading_direction.get((direction_heading.get(direction) + 90) % 360),
  };
}

function turnLeft(x, y, direction) {
  if (!direction_heading.has(direction)) {
    return { position: [x, y], direction };
  }

  const heading = direction_heading.get(direction);
  return {
    position: [x, y],
    direction: heading_direction.get(heading === 0 ? 270 : heading - 90),
  };
}

function findTheTreasure(startingPosition, direction, instructions) {
  return instructions.reduce(
    (location, instruction) => {
      switch (instruction) {
        case Instruction.FORWARD:
          return moveForward(location.position[0], location.position[1], location.direction);
        case Instruction.LEFT:
          return turnLeft(location.position[0], location.position[1], location.direction);
        case Instruction.RIGHT:
          return turnRight(location.position[0], location.position[1], location.direction);
      }
    },
    {
      position: startingPosition,
      direction,
    }
  );
}

module.exports = { findTheTreasure, moveForward, turnLeft, turnRight };
