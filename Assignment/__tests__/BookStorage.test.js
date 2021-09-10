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

describe("Testing getAllBookAuthors()", () => {
  test("get all book authors with default jsonData", () => {
    const bookStorage = new BookStorage(books);
    expect(bookStorage.getAllBookAuthors()).toEqual(books);
  });

  test("Some authors missing, then book is not added into the result array.", () => {
    const testData = [
      {
        id: 1,
        name: "NoSql - New Hope",
        author: "Layla Jones",
        topics: ["noSql", "sql", "future databases"],
        price: 25,
        extras: [
          {
            name: "hard cover",
            price: 30,
          },
          {
            name: "cd",
            price: 15,
          },
        ],
      },
      {
        id: 2,
        name: "Databases - The rise and fall",
        author: "Antony Lee",
        topics: ["data storages", "sql", "noSql"],
        price: 45,
        extras: [
          {
            name: "signed by author",
            price: 80,
          },
          {
            name: "dvd",
            price: 65,
          },
        ],
      },
      {
        id: 3,
        name: "Hacking databases",
        topics: [],
        price: 30,
        extras: [],
      },
    ];

    const expectedResult = [
      {
        id: 1,
        name: "NoSql - New Hope",
        author: "Layla Jones",
        topics: ["noSql", "sql", "future databases"],
        price: 25,
        extras: [
          {
            name: "hard cover",
            price: 30,
          },
          {
            name: "cd",
            price: 15,
          },
        ],
      },
      {
        id: 2,
        name: "Databases - The rise and fall",
        author: "Antony Lee",
        topics: ["data storages", "sql", "noSql"],
        price: 45,
        extras: [
          {
            name: "signed by author",
            price: 80,
          },
          {
            name: "dvd",
            price: 65,
          },
        ],
      },
    ];

    const bookStorage = new BookStorage(testData);
    expect(bookStorage.getAllBookAuthors()).toEqual(expectedResult);
  });

  test("no authors are found, returns an empty array", () => {
    const testData = [
      {
        id: 1,
        name: "NoSql - New Hope",
        topics: ["noSql", "sql", "future databases"],
        price: 25,
        extras: [
          {
            name: "hard cover",
            price: 30,
          },
          {
            name: "cd",
            price: 15,
          },
        ],
      },
      {
        id: 2,
        name: "Databases - The rise and fall",
        topics: ["data storages", "sql", "noSql"],
        price: 45,
        extras: [
          {
            name: "signed by author",
            price: 80,
          },
          {
            name: "dvd",
            price: 65,
          },
        ],
      },
      {
        id: 3,
        name: "Hacking databases",
        topics: [],
        price: 30,
        extras: [],
      },
    ];
    const bookStorage = new BookStorage(testData);
    expect(bookStorage.getAllBookAuthors()).toEqual([]);
  });
});
