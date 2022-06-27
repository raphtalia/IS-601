const { separateOddsAndEvens } = require("./separateOddsAndEvens");

describe("separateOddsAndEvens", () => {
  test("WHEN array is [1,2] THEN it returns [[1], [2]]", () => {
    expect(separateOddsAndEvens([1, 2])).toEqual([[1], [2]]);
  });

  test("WHEN array is [10,20,30] THEN it returns [[], [10,20,30]]", () => {
    expect(separateOddsAndEvens([10, 20, 30])).toEqual([[], [10, 20, 30]]);
  });

  test("WHEN array is [11,21,31] THEN it returns [[11,21,31], []]", () => {
    expect(separateOddsAndEvens([11, 21, 31])).toEqual([[11, 21, 31], []]);
  });

  it("should separate random odd and even numbers into 2 arrays", () => {
    const input = [];

    for (let i = 0; i < 100; i++) {
      input.push(i);
    }

    const output = separateOddsAndEvens(input);
    expect(output[0].every((num) => num % 2 === 1)).toBe(true);
    expect(output[1].every((num) => num % 2 === 0)).toBe(true);
  });
});
