"use strict";

const { sum } = require("../calclibrary");

describe("Test sum with integers", () => {
  test("test 1+1=2", () => {
    expect(sum(1, 1)).toBe(2);
  });

  test("test 2+3=5", () => {
    expect(sum(2, 3)).toBe(5);
  });
});

describe("Test sum with integer using test.each", () => {
  const testValues = [
    //a b expected
    [1, 1, 2],
    [2, 3, 5],
    [-2, -4, -6],
    [-2, 4, 2],
    [2, -4, -2],
    [0, 0, 0],
    [0, 3, 3],
    [3, 0, 3],
    [0, -3, -3],
    [-3, 0, -3],
  ];

  test.each(testValues)("sum(%s,%s) = %s", (a, b, expected) => {
    expect(sum(a, b)).toBe(expected);
  });
});
