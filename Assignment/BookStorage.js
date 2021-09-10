"use strict";

module.exports = class BookStorage {
  constructor(data) {
    if (!data) throw new Error("data storage missing");
    this.bookStorage = data;
  }

  getById(id) {
    for (let book of this.bookStorage) {
      if (book.id === id) {
        return {
          name: book.name,
          author: book.author,
        };
      }
    }
    return null;
  }

  getAllIdsByName(value) {
    const found = [];
    for (let book of this.bookStorage) {
      if (book.name === value) {
        found.push(book.id);
      }
    }
    return found;
  }
};
