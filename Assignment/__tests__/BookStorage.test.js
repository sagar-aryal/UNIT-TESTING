"use strict";

const BookStorage = require("../BookStorage");
const books = require("../books.json");

// Constructor

describe("Testing constructor", () => {
  test("json object created", () => {
    const bookStorage = new BookStorage(books);
    expect(bookStorage.bookStorage).toEqual(books);
  });

  test("parameter is missing", () => {
    expect(() => new BookStorage()).toThrow("data storage missing");
  });
});

// Methods

describe("Testing getById(id)", () => {
  const bookStorage = new BookStorage(books);

  test('get name and author of id "1"', () => {
    expect(bookStorage.getById(1)).toEqual({
      name: "NoSql - New Hope",
      author: "Layla Jones",
    });
  });

  test("wroung id", () => {
    expect(bookStorage.getById("0")).toBeNull();
  });

  test("parameter missing", () => {
    expect(() => new BookStorage()).toThrow("data storage missing");
  });

  describe("get names and authors by id from default data", () => {
    const testValues = [
      [1, { name: "NoSql - New Hope", author: "Layla Jones" }],
      [2, { name: "Databases - The rise and fall", author: "Antony Lee" }],
      [3, { name: "Hacking databases", author: "Emily White" }],
    ];

    test.each(testValues)("id %s returns %p", (id, expectedValue) => {
      expect(bookStorage.getById(id)).toEqual(expectedValue);
    });
  });
});

describe("Testing getAllIdsByName(value)", () => {
  const bookStorage = new BookStorage(books);

  test("get from default jsonData with parameters NoSql - New Hope", () => {
    expect(bookStorage.getAllIdsByName("NoSql - New Hope")).toEqual([1]);
  });

  test("get from default jsonData with parameters Hacking databases", () => {
    expect(bookStorage.getAllIdsByName("Hacking databases")).toEqual([3]);
  });

  test("wroung name returns an empty array", () => {
    expect(bookStorage.getAllIdsByName("Unit Testing with Jest")).toEqual([]);
  });

  test("missing parameter returns an empty array", () => {
    expect(bookStorage.getAllIdsByName()).toEqual([]);
  });
});
