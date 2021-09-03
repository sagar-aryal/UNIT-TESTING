# Test cases

## **getAllNumbersByType(type)**

Returns an array of objects consisting of names and numbers of given type. If no number of given type is found, returns an array [].
If a person have multiple numbers of the same type, each of them will be in it's own object.

If a parameter is missing, the function thwors an exception:
**`'missing parameter'`**

The format of the returned object is:

```json
[
  { "firstname": "", "lastname": "", "number": { "type": "", "tel": "" } },
  { "firstname": "", "lastname": "", "number": { "type": "", "tel": "" } }
]
```

Before tests create phoneRegister object from the class PhoneRegister.

### Example type work.

```json
[
  {
    "firstname": "Leila",
    "lastname": "Hökki",
    "number": { "type": "work", "tel": "87654321" }
  },
  {
    "firstname": "Leila",
    "lastname": "Hökki",
    "number": { "type": "work", "tel": "19283654" }
  },
  {
    "firstname": "Matt",
    "lastname": "River",
    "number": { "type": "work", "tel": "9537288353" }
  }
]
```

### Test 1: get all work numbers

```json
phoneRegister.getAllNumbersByType('work');
```

returns:

```json
[
  {
    "firstname": "Leila",
    "lastname": "Hökki",
    "number": { "type": "work", "tel": "87654321" }
  },
  {
    "firstname": "Leila",
    "lastname": "Hökki",
    "number": { "type": "work", "tel": "19283654" }
  },
  {
    "firstname": "Matt",
    "lastname": "River",
    "number": { "type": "work", "tel": "9537288353" }
  }
]
```

### Test 2: get all home numbers

```json
phoneRegister.getAllNumbersByType('home');
```

returns:

```json
[
  {
    "firstname": "Leila",
    "lastname": "Hökki",
    "number": { "type": "home", "tel": "12345678" }
  },
  {
    "firstname": "Matt",
    "lastname": "River",
    "number": { "type": "home", "tel": "453735442" }
  }
]
```

### Test 3: type 'x' will return an empty array []

```json
phoneRegister.getAllNumbersByType('x');
```

returns []

### Test 4: missing parameter throws an exception

```json
phoneRegister.getAllNumbersByType();
```

returns:
`'missing parameter'`
