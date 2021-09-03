# Phone API

## data

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

## Class PhoneRegister

## **constructor(data)**

Phones json array is passed as a parameter `data`. If the parameter is missing, throws an exeception ` phone data missing`.

## **getTypes()**

returns all phone types in an array. The type is added to the result array only once. If there are no phones or no persons, an empty array [] is returned.

For example:

```json
["home", "work", "mobile"]
```

## **getNumbersByType(firstname, lastname, type)**

Method returns an array of phone numbers of the given `type` belonging to a given person with the given `firstname` and `lastname`.

If no person with given name is found, an empty array [] is returned.
If no number with given type is found, an empty array [] is returned.
If atleast one parameter is missing an expection `missing parameter` is thrown.

For example Leila Hökki and work:

```json
["87654321", "19283654"]
```

## **getAllNumbersByType(type)**

Returns an array of objects consisting of names and numbers of given type. If no number of given type is found, returns an array [].
If a person have multiple numbers of the same type, each of them will be in it's own object.

If a parameter is missing, the function throws an exception:
**`'missing parameter'`**

The format of the returned object is:

```json
[
  { "firstname": "", "lastname": "", "number": { "type": "", "tel": "" } },
  { "firstname": "", "lastname": "", "number": { "type": "", "tel": "" } }
]
```

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
If all phones are missing, an empty array is returned.

## **getName(number)**

The method searches the given phone number from the telephone registery. If the number is found, the method returns and json object of form:

```json
{ "firstname": "", "lastname": "" }
```

If no phones with the given phone is found, the method returns `null`.
If the parameter is missing null is also returned.
