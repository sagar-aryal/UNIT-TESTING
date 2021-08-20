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
  [-3, 0, -3],

##### Floats

sum(10,11.5) returns 21.5

[10, 11.5, 21.5],
[2.5, 3, 5.5],
[-2.5, 3, 0.5],
[3, -2.5, 0.5],
[-3, 2.5, -0.5],
[-2.5, -3, -5.5],
[-2.5, -2.5, -5.0],
[-2.5, 2.5, 0],
[2.4, -2.5, -0.1]

#### Missing Parameters

- sum() throws an expection `'parameter missing'`
- sum(1) throws an expection `'parameter missing'`
- sum('a') throws an expection `'parameter missing'`
- sum('') throws an expection `'parameter missing'`

#### Parameters are not numbers

- sum('a', 1) throws an expection `'only numbers are allowed'`
- sum(1, 'a') throws an expection `'only numbers are allowed'`
- sum('a', 'b') throws an expection `'only numbers are allowed'`
- sum('', '') throws an expection `'only numbers are allowed'`
- sum(null, 1) throws an expection `'parameter missing'`
- sum(undefined, 1) throws an expection `'parameter missing'`

## **subtract(a,b)**

Function returns the differences of two numbers. Numbers are passed to the function as parameters.

Returns the differences on given numbers.

- if parameter is missing, throw an exception: `'parameter missing'`
- if parameters are not numbers, throw an exception: `'only numbers are allowed'`

### Test cases

#### 1 subtract

##### Integers

- subtract(1,1) returns 0
- subtract(4,3) returns 1
- subtract(-2,4) returns -6
- subtract(2,4) returns -2
  [2, -4, -2],
  [0, 0, 0],
  [0, 3, 3],
  [3, 0, 3],
  [0,- 3, -3],
  [-3, 0, -3],

##### Floats

- subtract(10,11.5) returns -1.5
- subtract(5.5,2.5) returns 3

[10, 11.5, 21.5],
[2.5, 3, 5.5],
[-2.5, 3, 0.5],
[3, -2.5, 0.5],
[-3, 2.5, -0.5],
[-2.5, -3, -5.5],
[-2.5, -2.5, -5.0],
[-2.5, 2.5, 0],
[2.4, -2.5, -0.1]

#### Missing Parameters

- subtract() throws an expection `'parameter missing'`
- subtract(1) throws an expection `'parameter missing'`
- subtract('a') throws an expection `'parameter missing'`
- subtract('') throws an expection `'parameter missing'`

#### Parameters are not numbers

- subtract('a', 1) throws an expection `'only numbers are allowed'`
- subtract(1, 'a') throws an expection `'only numbers are allowed'`
- subtract('a', 'b') throws an expection `'only numbers are allowed'`
- subtract('', '') throws an expection `'only numbers are allowed'`
- subtract(null, 1) throws an expection `'parameter missing'`
- subtract(undefined, 1) throws an expection `'parameter missing'`

## division

function divide(a, b), return a/b.

- problems:

0/0 => NAN
2/0 => Infinity
-2/0 => -Infinity
Infinity/Infinity => NaN
-Infinity/Infinity => NaN
Infinity/-Infinity => NaN
-Infinity/-Infinity => NaN

- Test values:

  [0, 0, Number.NaN],
  [2, 0, Number.POSITIVE_INFINITY],
  [-2, 0, Number.NEGATIVE_INFINITY],
  [Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY, Number.NaN]
