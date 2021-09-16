# Test Cases:

### **getBookTopics(id)**

Returns an array of book topics. If none found, returns an empty array.

- Parameters: id of the book
- Return: returns topics as an array

### Test Case 1: get from default jsonData with parameter id of 1

```js
bookStorage.getBookTopics(1);
```

returns

```json
["noSql", "sql", "future databases"]
```

### Test Case 2: get from default jsonData with paramater id of 2

```js
bookStorage.getBookTopics(2);
```

returns

```json
["data storages", "sql", "noSql"]
```

### Test Case 3: wroung paramater throws an empty array

```js
bookStorage.getBookTopics(5);
```

### Test Case 4: missing paramater throws an empty array

```js
bookStorage.getBookTopics();
```
