import { helloWorld } from "./helloWorld";

describe("helloWorld", () => {
  test("to return Hello, world!", () => {
    expect(helloWorld()).toBe("Hello, world!");
  });

  // Tests written before class
  it('should return "Hello, world!"', () => {
    expect(helloWorld()).toBe("Hello, world!");
  });
});
