# Test Cases:

### **getAllIdsByName(value)**

Returns all ids of the books matching the value of name

- Parameters: value of the property to be searched
- Return: Returns an array of book id where the books name matches the given value. If there is no match or parameter is missing, an empty array is returned.

### Test case 1: get from default jsonData with parameters 'NoSql - New Hope'.

```js
bookStorage.getAllIdsByName("NoSql - New Hope");
```

returns

```json
[1]
```

### Test case 2: get from default jsonData with parameters 'Hacking databases'.

```js
bookStorage.getAllIdsByName("Hacking databases");
```

returns

```json
[3]
```

### Test case 3: wroung name returns an empty array.

```js
bookStorage.getAllIdsByName("Unit Testing with Jest");
```

returns

```json
[]
```

### Test case 4: parameter missing returns an empty array.

```js
bookStorage.getAllIdsByName("unit testing");
```

returns

```json
[]
```
