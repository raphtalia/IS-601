const { getCostOfLemonade, getFormattedCostOfLemonade } = require("./costOfLemonade");

describe("costOfLemonade", () => {
  describe("GIVEN a valid input", () => {
    test.each([
      [1, 100],
      [4, 400],
      [5, 475],
      [9, 855],
      [10, 900],
      [100, 9000],
    ])("WHEN numberOfLemonades is %i THEN it returns %i", (numberOfLemonades, expectedCost) => {
      expect(getCostOfLemonade(numberOfLemonades)).toBe(expectedCost);
    });
  });

  describe("GIVEN an invalid input", () => {
    test.each([
      // ["1"],
      ["-1"],
      [-1],
      [{ name: "alex" }],
      [null],
    ])("WHEN numberOfLemonades is %i THEN it throws an error", (invalidInput) => {
      expect(() => getCostOfLemonade(invalidInput)).toThrowError();
    });
  });

  // Tests written before class
  it("should return cost of lemonades", () => {
    expect(getCostOfLemonade(0)).toBe(0);
    expect(getCostOfLemonade(1)).toBe(100);
    expect(getCostOfLemonade(4)).toBe(400);
    expect(getCostOfLemonade(5)).toBe(475);
    expect(getCostOfLemonade(9)).toBe(855);
    expect(getCostOfLemonade(10)).toBe(900);
    expect(getCostOfLemonade(100)).toBe(9000);
  });

  it("should throw on invalid inputs", () => {
    expect(() => {
      getCostOfLemonade([]);
    }).toThrow();
    expect(() => {
      getCostOfLemonade(-1);
    }).toThrow();
  });

  it("should return the formatted cost of lemonades", () => {
    expect(getFormattedCostOfLemonade(0)).toBe("0 lemonades will cost 0 cents");
    expect(getFormattedCostOfLemonade(1)).toBe("1 lemonade will cost 100 cents");
    expect(getFormattedCostOfLemonade(4)).toBe("4 lemonades will cost 400 cents");
    expect(getFormattedCostOfLemonade(5)).toBe("5 lemonades will cost 475 cents");
    expect(getFormattedCostOfLemonade(9)).toBe("9 lemonades will cost 855 cents");
    expect(getFormattedCostOfLemonade(10)).toBe("10 lemonades will cost 900 cents");
    expect(getFormattedCostOfLemonade(100)).toBe("100 lemonades will cost 9000 cents");
  });
});
