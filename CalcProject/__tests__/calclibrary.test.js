"use strict";

const { sum, subtract, divide } = require("../calclibrary");

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

describe("Testing sum with floating point numbers", () => {
  const testValues = [
    [10, 11.5, 21.5],
    [2.5, 3, 5.5],
    [-2.5, 3, 0.5],
    [3, -2.5, 0.5],
    [-3, 2.5, -0.5],
    [-2.5, -3, -5.5],
    [-2.5, -2.5, -5.0],
    [-2.5, 2.5, 0],
    [2.4, -2.5, -0.1],
  ];

  test.each(testValues)("sum(%s, %s) = %s", (a, b, expected) => {
    expect(sum(a, b)).toBeCloseTo(expected);
  });
});

describe("Test missing parameters throw an expection", () => {
  test('sum() throws an expection "parameter missing"', () => {
    expect(() => sum()).toThrow("parameter missing");
  });

  const testValues = [
    [null, "parameter missing"],
    [1, "parameter missing"],
    ["a", "parameter missing"],
    ["", "parameter missing"],
  ];

  test.each(testValues)(
    "sum(%s) throws an expection: %s",
    (value, expected) => {
      expect(() => sum(value)).toThrow(expected);
    }
  );
});

describe("Testing parameters are not numbers", () => {
  const testValues = [
    ["a", 1, "only numbers are allowed"],
    [1, "a", "only numbers are allowed"],
    ["a", "b", "only numbers are allowed"],
    ["", "", "only numbers are allowed"],
    [null, 1, "parameter missing"],
    [undefined, 1, "parameter missing"],
  ];
  test.each(testValues)("sum(%s, %s) throws %s", (a, b, expected) => {
    expect(() => sum(a, b)).toThrow(expected);
  });
});

///////// SUBTRACTION /////////

describe("Test differences with integers", () => {
  test("test 1-1=0", () => {
    expect(subtract(1, 1)).toBe(0);
  });

  test("test 2-3=-1", () => {
    expect(subtract(2, 3)).toBe(-1);
  });
});

describe("Test difference with integer using test.each", () => {
  const testValues = [
    //a b expected
    [1, 1, 0],
    [2, 3, -1],
    [-2, -4, 2],
    [-2, 4, -6],
    [2, -4, 6],
    [0, 0, 0],
    [0, 3, -3],
    [3, 0, 3],
    [0, -3, 3],
    [-3, 0, -3],
  ];

  test.each(testValues)("subtract(%s,%s) = %s", (a, b, expected) => {
    expect(subtract(a, b)).toBe(expected);
  });
});

describe("Testing difference with floating point numbers", () => {
  const testValues = [
    [10, 11.5, -1.5],
    [2.5, 3, -0.5],
    [-2.5, 3, -5.5],
    [3, -2.5, 5.5],
    [-3, 2.5, -5.5],
    [-2.5, -3, 0.5],
    [-2.5, -2.5, 0],
    [-2.5, 2.5, -5],
    [2.4, -2.5, 4.9],
  ];

  test.each(testValues)("subtract(%s, %s) = %s", (a, b, expected) => {
    expect(subtract(a, b)).toBeCloseTo(expected);
  });
});

describe("Test missing parameters throw an expection", () => {
  test('subtract() throws an expection "parameter missing"', () => {
    expect(() => subtract()).toThrow("parameter missing");
  });

  const testValues = [
    [null, "parameter missing"],
    [1, "parameter missing"],
    ["a", "parameter missing"],
    ["", "parameter missing"],
  ];

  test.each(testValues)(
    "subtract(%s) throws an expection: %s",
    (value, expected) => {
      expect(() => subtract(value)).toThrow(expected);
    }
  );
});

describe("Testing parameters are not numbers", () => {
  const testValues = [
    ["a", 1, "only numbers are allowed"],
    [1, "a", "only numbers are allowed"],
    ["a", "b", "only numbers are allowed"],
    ["", "", "only numbers are allowed"],
    [null, 1, "parameter missing"],
    [undefined, 1, "parameter missing"],
  ];
  test.each(testValues)("subtract(%s, %s) throws %s", (a, b, expected) => {
    expect(() => subtract(a, b)).toThrow(expected);
  });
});

///////// DIVISION /////////

describe("Testing division", () => {
  const testValues = [
    [0, 0, Number.NaN],
    [2, 0, Number.POSITIVE_INFINITY],
    [-2, 0, Number.NEGATIVE_INFINITY],
    [Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY, Number.NaN],
  ];
  test.each(testValues)("divide(%s, %s)=%s", (a, b, expected) => {
    expect(divide(a, b)).toBe(expected);
  });
});
