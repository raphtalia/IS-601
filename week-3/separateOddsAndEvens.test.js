const { separateOddsAndEvens } = require("./separateOddsAndEvens");

describe("separateOddsAndEvens", () => {
  it("should separate odd and even numbers into 2 arrays", () => {
    const input = [];

    for (let i = 0; i < 100; i++) {
      input.push(i);
    }

    const output = separateOddsAndEvens(input);

    for (const num of output[0]) {
      expect(num % 2).toBe(1);
    }

    for (const num of output[1]) {
      expect(num % 2).toBe(0);
    }
  });
});
