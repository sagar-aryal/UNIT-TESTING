"use strict";

const { test, expect } = require("@jest/globals");
const { describe } = require("yargs");
const search = require("../carstorageFileCallback2");

describe("testing callback", () => {
  test("search with licence ABC-1", (done) => {
    function cb(data) {
      try {
        expect(data).toEqual([{ model: "Bored T-model", licence: "ABC-1" }]);
        done();
      } catch (error) {
        done(error);
      }
    }
    search("licence", "ABC-1", cb);
  });
});

describe("testing callback with array of test values", () => {
  const testValues = [
    ["licence", "XYZ", []],
    [
      "model",
      "Bored T-model",
      [
        { model: "Bored T-model", licence: "ABC-1" },
        { model: "Bored T-model", licence: "GFT-10" },
      ],
    ],
    ["licence", "B-1", [{ model: "XGT", licence: "B-1" }]],
  ];

  test.each(testValues)("%s, %s", (key, value, expected, done) => {
    function cb(data) {
      try {
        expect(data).toEqual(expected);
        done();
      } catch (error) {
        done(error);
      }
    } // callback function ends here
    search(key, value, cb);
  });
});

describe("testing the missing callback", () => {
  test("callback missing throws an exception", () => {
    expect(() => search("licence", "ABC-1")).toThrow(
      "callback function missing"
    );
  });
});
