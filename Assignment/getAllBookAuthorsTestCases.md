# Test Cases:

### **getAllBookAuthors()**

Returns an array of different book authors.

- Parameters: none
- Return: Returns an array of different book authors. If no authors are found, returns an empty array. The author is added to the result array only once.

### Test Case 1: get all book authors with default jsonData.

```js
booStorage.getAllBookAuthors();
```

returns:

```json
[
  {
    "id": 1,
    "name": "NoSql - New Hope",
    "author": "Layla Jones",
    "topics": ["noSql", "sql", "future databases"],
    "price": 25,
    "extras": [
      {
        "name": "hard cover",
        "price": 30
      },
      {
        "name": "cd",
        "price": 15
      }
    ]
  },
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
  },
  {
    "id": 3,
    "name": "Hacking databases",
    "author": "Emily White",
    "topics": [],
    "price": 30,
    "extras": []
  }
]
```

### Test Case 2: Some authors missing, then book is not added into the result array.

Test data:

```json
[
  {
    "id": 1,
    "name": "NoSql - New Hope",
    "author": "Layla Jones",
    "topics": ["noSql", "sql", "future databases"],
    "price": 25,
    "extras": [
      {
        "name": "hard cover",
        "price": 30
      },
      {
        "name": "cd",
        "price": 15
      }
    ]
  },
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
  },
  {
    "id": 3,
    "name": "Hacking databases",
    "topics": [],
    "price": 30,
    "extras": []
  }
]
```

```js
booStorage.getAllBookAuthors();
```

returns:

```json
[
  {
    "id": 1,
    "name": "NoSql - New Hope",
    "author": "Layla Jones",
    "topics": ["noSql", "sql", "future databases"],
    "price": 25,
    "extras": [
      {
        "name": "hard cover",
        "price": 30
      },
      {
        "name": "cd",
        "price": 15
      }
    ]
  },
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

### Test Case 3: no authors are found, returns an empty array

Test data:

```json
[
  {
    "id": 1,
    "name": "NoSql - New Hope",
    "topics": ["noSql", "sql", "future databases"],
    "price": 25,
    "extras": [
      {
        "name": "hard cover",
        "price": 30
      },
      {
        "name": "cd",
        "price": 15
      }
    ]
  },
  {
    "id": 2,
    "name": "Databases - The rise and fall",
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
  },
  {
    "id": 3,
    "name": "Hacking databases",
    "topics": [],
    "price": 30,
    "extras": []
  }
]
```

```js
booStorage.getAllBookAuthors();
```

returns: []
