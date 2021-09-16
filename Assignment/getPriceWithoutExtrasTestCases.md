# Test Cases:

### **getPriceWithoutExtras(id)**

Returns the price with out extras

- Parameters: id of the book
- Return: The price of the book not including the price of the extras
- if no book with the given number is found throws an exeption `nothing found with given id`

### Test Case 1: get price of the book without the price of extras with an id of 1

```js
bookStorage.getPriceWithoutExtras(1);
```

returns:

```
25
```

### Test Case 2: if no book with the given number is found throws an exeption

```js
bookStorage.getPriceWithoutExtras(4);
```

returns:

```
nothing found with given id
```
