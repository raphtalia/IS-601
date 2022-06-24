const { getCostOfLemonade, getFormattedCostOfLemonade } = require("./costOfLemonade");

describe("costOfLemonade", () => {
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
