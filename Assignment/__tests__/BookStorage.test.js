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

describe("Testing getAllBooksByAuthor(author)", () => {
  const bookStorage = new BookStorage(books);

  test("get book objects of author Antony Lee", () => {
    expect(bookStorage.getAllBooksByAuthor("Antony Lee")).toEqual([
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
    ]);
  });

  test("wroung name returns an empty array", () => {
    expect(bookStorage.getAllBooksByAuthor("Helil")).toEqual([]);
  });

  test("missing parameter throws an exception 'missing parameter'", () => {
    expect(() => bookStorage.getAllBooksByAuthor()).toThrow(
      "missing parameter"
    );
  });
});

describe("Testing hasTopics(id)", () => {
  const bookStorage = new BookStorage(books);

  test("passing parameter id of book having topics", () => {
    expect(bookStorage.hasTopics(1)).toEqual(true);
  });

  test("passing parameter id of book with no topics", () => {
    expect(bookStorage.hasTopics(3)).toEqual(false);
  });

  test("missing parameter id of book", () => {
    expect(bookStorage.hasTopics()).toEqual(false);
  });
});

describe("Testing getBookTopics(id)", () => {
  const bookStorage = new BookStorage(books);

  test("get from default jsonData with parameter id of 1", () => {
    expect(bookStorage.getBookTopics(1)).toEqual([
      "noSql",
      "sql",
      "future databases",
    ]);
  });

  test("get from default jsonData with parameter id of 2", () => {
    expect(bookStorage.getBookTopics(2)).toEqual([
      "data storages",
      "sql",
      "noSql",
    ]);
  });

  test(" wroung paramater throws an empty array", () => {
    expect(bookStorage.getBookTopics(5)).toEqual([]);
  });

  test(" missing paramater throws an empty array", () => {
    expect(bookStorage.getBookTopics()).toEqual([]);
  });
});

describe("Testing getPriceWithoutExtras(id)", () => {
  const bookStorage = new BookStorage(books);

  test("get price of the book without the price of extras with an id of 1", () => {
    expect(bookStorage.getPriceWithoutExtras(1)).toEqual(25);
  });

  test("if no book with the given number is found throws an exeption", () => {
    expect(() => bookStorage.getPriceWithoutExtras(4)).toThrow(
      "nothing found with given id"
    );
  });
});

describe("Testing getTotalPrice(id)", () => {
  const bookStorage = new BookStorage(books);

  test("get total price of the book with an id of 1", () => {
    expect(bookStorage.getTotalPrice(1)).toEqual(70);
  });

  test("get total price of the book with an id of 3", () => {
    expect(bookStorage.getTotalPrice(3)).toEqual(30);
  });

  test("get total price of the book with wroung id of 5", () => {
    expect(() => bookStorage.getTotalPrice(5)).toThrow(
      "nothing found with given id"
    );
  });
});

describe("Testing getPriceOfTheExtras(id)", () => {
  const bookStorage = new BookStorage(books);

  test("get total price of the book with an id of 1", () => {
    expect(bookStorage.getPriceOfTheExtras(2)).toEqual(145);
  });

  test("get total price of the book with an id of 3", () => {
    expect(bookStorage.getPriceOfTheExtras(3)).toEqual(0);
  });

  test("get total price of the book with wroung id of 5", () => {
    expect(() => bookStorage.getPriceOfTheExtras(4)).toThrow(
      "nothing found with given id"
    );
  });
});
