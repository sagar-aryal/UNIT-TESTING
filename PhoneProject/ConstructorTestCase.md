# Test Cases

## **constructor(data)**

Phones json array is passed as a parameter `data`. If the parameter is missing, throws an exeception `phone data missing`.

### Test 1: object created

```json
new PhoneRegister(jsonData);
```

test if the objects inner field has the same value as given as parameter. Parameter jsonData is the json array from the default `phones.json`.

### Test 2: missing parameter throws an exception

```json
new PhoneRegister();
```

this will throws an exception `'phone data missing'`
