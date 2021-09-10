# Test Cases

## **getAllNumbers()**

Returns all phone numbers in an array, each as an object of form:

```json
{ "firstname": "", "lastname": "", "phones": [] }
```

The phone object in phones array is of form:

```json
{ "type": "", "number": "" }
```

If a person doesn't have a phone (the phone-field is an empty array), then the person is not added into the result array. If all phones are missing, an empty array is returned.
If all persons are missing, an empty array is returned.

Before tests create phoneRegister object from the class PhoneRegister.

### Test 1: get all with default data

```js
phoneRegister.getAllNumbers();
```

result is:

```json
[
  {
    "firstname": "Leila",
    "lastname": "Hökki",
    "phones": [
      { "type": "home", "number": "12345678" },
      { "type": "work", "number": "87654321" },
      { "type": "work", "number": "05040302" }
    ]
  },
  {
    "firstname": "Matt",
    "lastname": "River",
    "phones": [
      { "type": "home", "number": "56789012" },
      { "type": "mobile", "number": "04123456" },
      { "type": "work", "number": "32145678" }
    ]
  }
]
```

### Test 2: some phones missing

Test data:

```json
[
  {
    "firstname": "Leila",
    "lastname": "Hökki",
    "phones": [
      { "type": "home", "number": "12345678" },
      { "type": "work", "number": "87654321" },
      { "type": "work", "number": "05040302" }
    ]
  },
  {
    "firstname": "Matt",
    "lastname": "River",
    "phones": []
  }
]
```

```js
phoneRegister.getAllNumbers();
```

returns:

```json
[
  {
    "firstname": "Leila",
    "lastname": "Hökki",
    "phones": [
      { "type": "home", "number": "12345678" },
      { "type": "work", "number": "87654321" },
      { "type": "work", "number": "05040302" }
    ]
  }
]
```

### Test 3: all phones missing

test data:

```json
[
  {
    "firstname": "Leila",
    "lastname": "Hökki",
    "phones": []
  },
  {
    "firstname": "Matt",
    "lastname": "River",
    "phones": []
  }
]
```

```js
phoneRegister.getAllNumbers();
```

returns an empty array [].

### Test 4: all persons missing

testdata is [].

```js
phoneRegister.getAllNumbers();
```

returns an empty array [].
