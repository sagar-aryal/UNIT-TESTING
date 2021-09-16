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

  getAllBookAuthors() {
    const found = [];
    for (let book of this.bookStorage) {
      if (book.author && book.author.length > 0) {
        found.push(book);
      }
    }
    return found;
  }

  getAllBooksByAuthor(author) {
    if (!author) throw new Error("missing parameter");
    const found = [];
    for (let book of this.bookStorage) {
      if (book.author === author) {
        found.push(book);
      }
    }
    return found;
  }

  hasTopics(id) {
    if (!id) return false;
    for (let book of this.bookStorage) {
      if (book.id === id && book.topics.length > 0) {
        return true;
      }
    }
    return false;
  }

  getBookTopics(id) {
    const found = [];
    for (let book of this.bookStorage) {
      if (book.id === id && book.topics.length > 0) {
        return book.topics;
      }
    }
    return found;
  }

  getPriceWithoutExtras(id) {
    for (let book of this.bookStorage) {
      if (book.id === id) {
        return book.price;
      }
    }
    throw new Error("nothing found with given id");
  }

  getTotalPrice(id) {
    let totalPrice = 0;
    for (let book of this.bookStorage) {
      if (book.id === id) {
        totalPrice = totalPrice + book.price;
        for (let extras of book.extras) {
          totalPrice = totalPrice + extras.price;
        }
        return totalPrice;
      }
    }
    throw new Error("nothing found with given id");
  }

  getPriceOfTheExtras(id) {
    let totalPrice = 0;
    for (let book of this.bookStorage) {
      if (book.id === id) {
        for (let extras of book.extras) {
          totalPrice = totalPrice + extras.price;
        }
        return totalPrice;
      }
    }
    throw new Error("nothing found with given id");
  }
};
