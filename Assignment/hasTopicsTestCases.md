# Test Cases:

### **hasTopics(id)**

- Parameters: id of the book
- Return: returns true if the book has topics else returns false. If parameter id is missing false is returned

### Test Case 1: passing parameter id of book having topics

```js
bookStorage.hasTopics(1);
```

returns true

### Test Case 2: passing parameter id of book with no topics.

```js
bookStorage.hasTopics(3);
```

returns false:

### Test Case 3: missing parameter id of book

```js
bookStorage.hasTopics();
```

returns false;
