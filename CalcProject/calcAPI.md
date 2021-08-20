# calc library API

## **sum(a,b)**

Function returns the sum of two numbers. Numbers are passed to the function as parameters.

Returns the sum on given numbers.

- if parameter is missing, throw an exception: `'parameter missing'`
- if parameters are not numbers, throw an exception: `'only numbers are allowed'`

### Test cases

#### 1 sums

##### Integers

- sum(1,1) returns 2
- sum(2,3) returns 5
- sum(-2,-4) returns -6
- sum(-2,4) returns 2
  [2, -4, -2],
  [0, 0, 0],
  [0, 3, 3],
  [3, 0, 3],
  [0,- 3, -3],
  [-3, 0, -3]
