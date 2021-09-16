# Test Cases:

### **getPriceOfTheExtras(id)**

Returns the total price of extras bunled with the book

- Parameters: id of the book to be searched
- Return: the total price of extras. If no extras is found returns 0
- if no book with the given number is found throws an exeption `nothing found with given id`

### Test Case 1: get the total price of extras of an id 2

```js
bookStorage.getPriceOfTheExtras(2);
```

returns
145

### Test Case 1: get the total price of extras of an id 3 with no extras price

```js
bookStorage.getPriceOfTheExtras(3);
```

returns
0

### Test Case 1: get the total price of extras with wroung id 4

```js
bookStorage.getPriceOfTheExtras(4);
```

returns
nothing found with given id
