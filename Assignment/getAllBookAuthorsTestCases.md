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

  ["Layla Jones" "Antony Lee",  "Emily White"]

```

### Test Case 2: no authors are found, returns an empty array

```js
booStorage.getAllBookAuthors();
```

returns: []
