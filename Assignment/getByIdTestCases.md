# Test Cases:

### **getById(id)**

Method searches the datastorage for an object with given key. Key is unique.

- Parameters: id of the book
- Return: returns the book object matching the id or null if there is no match
- if parameter is missing, throws an exception `'parameter missing'`

### Test Case 1: get name and author of id "1"

Call

```js
bookStorage.getById("1");
```

returns

```json
{ "name": "NoSql - New Hope", "author": "Layla Jones" }
```

### Test Case 2: get names and authors by id from default data

```js
const testValues = [
  ["1", { name: "NoSql - New Hope", author: "Layla Jones" }],
  ["2", { name: "Databases - The rise and fall", author: "Antony Lee" }],
  ["3", { name: "Hacking databases", author: "Emily White" }],
];
```

### Test Case 3: wrong id

Call

```js
bookStorage.getById("0");
```

returns `null`.

### Test Case 4. parameter missing

Call

```js
bookStorage.getById();
```

returns `parameter missing`.
