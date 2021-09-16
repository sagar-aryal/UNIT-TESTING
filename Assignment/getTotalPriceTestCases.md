# Test Cases:

### **getTotalPrice(id)**

Returns the total price of the book including the total price of the extras

- Parameters: id of the book
- Return: The price of the book including the total price of the extras
- if no book with the given number is found throws an exeption `nothing found with given id`

### Test Case 1: get total price of the book with an id of 1

```js
bookStorage.getTotalPrice(1);
```

returns 70

### Test Case 1: get total price of the book with an id of 3

```js
bookStorage.getTotalPrice(3);
```

returns 30

### Test Case 1: get total price of the book with wroung id of 5

```js
bookStorage.getTotalPrice(5);
```

returns

```json
nothing found with given id
```
