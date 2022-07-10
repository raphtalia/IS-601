const { addIsAwesome } = require("./addIsAwesome");

describe("addIsAwesome", () => {
  test("it adds is awesome", (done) => {
    addIsAwesome("Training", (result) => {
      expect(result).toBe("Training is awesome");
      done();
    });
  });

  // Tests written before class using test instead of describe
  // addIsAwesome("javascript", (result) => {
  //   if (result === "javascript is awesome") {
  //     done();
  //   } else {
  //     done(new Error("addIsAwesome did not return 'javascript is awesome'"));
  //   }
  // });
});
