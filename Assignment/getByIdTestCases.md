# Test Cases:

### **getById(id)**

Method searches the datastorage for an object with given key. Key is unique.

- Parameters: id of the book
- Return: returns the book object matching the id or null if there is no match
- if parameter is missing, throws an exception `'parameter missing'`

### Test Case 1: get book object of id 1

Call

```js
bookStorage.getById("1");
```

returns

```json
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
}
```

### Test Case 2: wrong id

Call

```js
bookStorage.getById("0");
```

returns `null`.

### Test Case 3. parameter missing

Call

```js
bookStorage.getById();
```

returns `parameter missing`.
