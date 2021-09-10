# Test Cases:

## Constructor

### **constructor(jsonData)**

The data storage json object is passed as a parameter to the constructor. If the parameter is missing, constructor throws an error `'data storage missing'`.

### Test Case 1: json object created

```json
new BookStorage(jsonData);
```

test if the objects inner field has same value as given parameter. Parameter jsonData is the json array from the default `books.json`.

### Test Case 2: parameter is missing

```json
new BookStorage();
```

result:

this will throws an exception `data storage missing`
