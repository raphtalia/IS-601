import { helloWorld } from "./helloWorld";

describe("helloWorld", () => {
  it('should return "Hello, world!"', () => {
    expect(helloWorld()).toBe("Hello, world!");
  });
});
