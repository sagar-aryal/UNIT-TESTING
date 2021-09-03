# Test Cases

## **getName(number)**

The method searches the given phone number from the telephone registery. If the number is found, the method returns and json object of form:

```json
{ "firstname": "", "lastname": "" }
```

If no phones with the given phone is found, the method returns `null`.
If the parameter is missing null is also returned.

Before tests create phoneRegister object from the class PhoneRegister.

### Test 1: get the name of number "12345678"

Call

```json
phoneRegister.getName("12345678");
```

returns

```json
{ "firstname": "Leila", "lastname": "Hokki" }
```

### Test 2: get names by numbers from default data

```json
const testValues = [
    ["12345678", {"firstname": "Leila", "lastname": "Hokki" }],
    ["87654321", {"firstname": "Leila", "lastname": "Hokki" }],
    ["453735442", {"firstname": "Matt", "lastname": "River" }],

];
```

### Test 3: wroung number

Call

```json
phoneRegister.getName("00000000");
```

returns `null`

### Test 4: parameter missing

Call

```json
phoneRegister.getName();
```

returns `null`
