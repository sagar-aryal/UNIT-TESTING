### **getAllBooksByAuthor(author)**

Returns an array of book objects of given author

- Parameters: author of the book to be searched
- Returns an array of book objects of given author. If no book of given author is found, returns an empty array.
- If a parameter author is missing, an exeption **'missing parameter'** is thrown.

### Test Case 1: get book objects of author Antony Lee

Call

```js
bookStorage.getAllBooksByAuthor("Antony Lee");
```

returns

```json
[
  {
    "id": 2,
    "name": "Databases - The rise and fall",
    "author": "Antony Lee",
    "topics": ["data storages", "sql", "noSql"],
    "price": 45,
    "extras": [
      {
        "name": "signed by author",
        "price": 80
      },
      {
        "name": "dvd",
        "price": 65
      }
    ]
  }
]
```

### Test Case 2: wrong author name returns an empty array

Call

```js
bookStorage.getAllBooksByAuthor("Helil");
```

returns [].

### Test Case 3. missing parameter throws an exception 'missing parameter'

Call

```js
bookStorage.getAllBooksByAuthor();
```

returns `missing parameter`.
