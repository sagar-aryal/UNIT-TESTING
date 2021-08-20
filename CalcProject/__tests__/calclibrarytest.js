"use strict";

const library = require("../calclibrary");

decribe("Test sum with integers", () => {
  test("test 1+1=2", () => {
    expect(library.sum(1, 1).toBe(2));
  });
});
