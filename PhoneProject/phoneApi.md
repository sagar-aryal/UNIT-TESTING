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

returns all phone types in an array. The type is added to the result array only once. If there are no phones, an empty array [] is returned.

For example:

```json
["home", "work", "mobile"]
```

## **getNumbersByType(firstname, lastname, type)**

Method returns an array of phone numbers of the given `type` belonging to a given person with the given `firstname` and `lastname`.

If no person with given name is found, an empty array [] is returned.
If atleast one parameter is missing an expection `missing parameter` is thrown.

For example Leila Hökki and work:

```json
["8454447757", "9474655638"]
```
