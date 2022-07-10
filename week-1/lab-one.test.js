import helloWorld from "./lab-one";

describe("helloWorld", () => {
  it('should return "Hello, world!"', () => {
    expect(helloWorld()).toBe("Hello, world!");
  });
});
