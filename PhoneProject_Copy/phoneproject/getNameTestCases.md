## Test Cases

## **getName(number)**
The method searches the given phone number from the telephone registry. If the number is found, the method returns an json object of form

```json
{"firstname":"", "lastname":""}
```
If no phone with given number is found, the method returns `null`.
If the parameter is missing null is also returned.

Before tests create phoneRegister object from the class PhoneRegister.

### Test 1: get name of the number "12345678"

Call
```js
phoneRegister.getName("12345678");
```

returns
```json
{"firstname":"Leila", "lastname":"Hökki"}
```

### Test 2: get names by numbers from default data

```js
const testValues=[
    ["12345678", {"firstname":"Leila", "lastname":"Hökki"}],
    ["87654321", {"firstname":"Leila", "lastname":"Hökki"}],
    ["56789012", {"firstname":"Matt", "lastname":"River"}],
];
```

### 3: wrong number

Call
```js
phoneRegister.getName("0000");
```
returns `null`.

### 4. parameter missing

Call
```js
phoneRegister.getName();
```
returns `null`.