const addIsAwesome = require("./lab-two");

test("addIsAwesome", (done) => {
  addIsAwesome("javascript", (result) => {
    if (result === "javascript is awesome") {
      done();
    } else {
      done(new Error("addIsAwesome did not return 'javascript is awesome'"));
    }
  });
});
