# Test Cases

## **getAllNumbers()**

Returns all phone numbers in an array, each as an object of form:

```json
{ "firstname": "", "lastname": "", "phones": [] }
```

The phone object in phone array is of form:

```json
{ "type": "", "number": "" }
```

If a person doesn't have a phone (the phone field is empty array), then the person is not added into the result array.
If all phones are missing, an empty array is returned.
If all persons are missing, an empty array is returned.

Before tests create phoneRegister object from the class PhoneRegister.

### Test 1: get all with default data

```json
phoneRegister.getAllNumbers();
```

result:

```json
[
  {
    "firstname": "Leila",
    "lastname": "Hökki",
    "phones": [
      {
        "type": "home",
        "number": "12345678"
      },
      {
        "type": "work",
        "number": "87654321"
      },
      {
        "type": "work",
        "number": "19283654"
      }
    ]
  },
  {
    "firstname": "Matt",
    "lastname": "River",
    "phones": [
      {
        "type": "home",
        "number": "453735442"
      },
      {
        "type": "mobile",
        "number": "3486543422"
      },
      {
        "type": "work",
        "number": "9537288353"
      }
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
      {
        "type": "home",
        "number": "12345678"
      },
      {
        "type": "work",
        "number": "87654321"
      },
      {
        "type": "work",
        "number": "19283654"
      }
    ]
  },
  {
    "firstname": "Matt",
    "lastname": "River",
    "phones": []
  }
]
```

```json
phoneRegister.getAllNumbers();
```

returns:

```json
[
  {
    "firstname": "Leila",
    "lastname": "Hökki",
    "phones": [
      {
        "type": "home",
        "number": "12345678"
      },
      {
        "type": "work",
        "number": "87654321"
      },
      {
        "type": "work",
        "number": "19283654"
      }
    ]
  },
  {
    "firstname": "Matt",
    "lastname": "River",
    "phones": []
  }
]
```

### Test 3: all phones missing

Test data:

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

```json
phoneRegister.getAllNumbers();
```

returns []

### Test 4: all persons missing

test data is []

```json
phoneRegister.getAllNumbers();
```

returns []
