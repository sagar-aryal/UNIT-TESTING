# Test cases

## **getNumbersByType(firstname, lastname, type)**

Method returns an array of phone numbers of the given `type` belonging to a given person with the given `firstname` and `lastname`.

If no person with given name is found, an empty array [] is returned.
If no number with given type is found, an empty array [] is returned.
If atleast one parameter is missing an expection `missing parameter` is thrown.

For example Leila Hökki and work:

```json
["8454447757", "9474655638"]
```

Before tests create phoneRegister object from the class PhoneRegister.

### Test 1: get fromm default jsonData with parameters Leila, Hökki, work

```json
phoneRegister.getNumbersByType('Leila','Hökki','work');
```

returns

```json
["87654321", "19283654"]
```

### Test 2: get from default jsonData with parameters Matt, River, mobile

```json
phoneRegister.getNumbersByType('Matt','River','mobile');
```

returns

```json
["3486543422"]
```

### Test 3: wroung type or name will returns an empty array

```json
phoneRegister.getNumbersByType('Matt','River','x');
phoneRegister.getNumbersByType('Matt','x','mobile');
phoneRegister.getNumbersByType('x','River','mobile');
```

### Test 4: missing parameter throws an exception

```json
phoneRegister.getNumbersByType('Matt','River');
phoneRegister.getNumbersByType('Matt');
phoneRegister.getNumbersByType();
```
