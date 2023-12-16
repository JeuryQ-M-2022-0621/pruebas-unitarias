const message = require("./index");

test("Checking message", () => {
  expect(message()).toBe("Hello, world!");
});
