# Dice class (API)

## Test description

This is a Dice class for dice games. Dice holds the number of dots. The number of dots is between 2 and given upper bound (included). The maximun upper bound is 20. The minimum upper bound is 2. If the dice hasn't been rolled, the number of dots is 0. After the dice has been rolled, the dot count can't become zero again.

## Operations

### **constructor**

- initializes the dice with upper bound that is passed as a parameter
- if nou upper bound is not giver, the default upper bound is 6
- initializes dot count to 0

- if upper bound is not an integer,
  throw an exception `'Upper bound must be integer'`

- if the upper bound is not between 1 and 20, an exception is thrown:
  - upper bound >20: `'Upper bound too big'`
  - upper bound <1: `'Upper bound too small'`

#### Test case for constructor

1. Create a dice with given upper bound

   - creat a dice with dot count between 1 and 6.
   - dott count is 0.

2. Create a dice with given upper bound 2-20

   - create

3. Test the expections
   - 0 throws an expection `'Upper bound too small'`
   - 1 throws an expection `'Upper bound too small'`
   - -1 throws an expection `'Upper bound too small'`
   - 21 throws an expection `'Upper bound too big'`
   - 'a' throws an expection `'Upper bound must be integer`
   - 2.5 throws an expection `'Upper bound must be integer'`

### **methods**

#### **roll**

- rolls the dice
- when rolled, the dot count become a random number between 1 and upper bound
- returns nothing

#### test cases for roll

- create a dice with no upper bound. Upper bound must me 6. When the dice hasn't been rolled, dot count is 0. Then roll the dice and now dot count should be between 1 and 6.
- create a dice with upper bound 20 => after rolled results dot count between 1 and 20.

#### **toString()**

- returns dot count as a string. For example: `'4'`
- if the dice hasn't been rollet yet, returns a text `'Not rolled yet'`

#### test case for toString

In both cases creat a new dice (no upper bound)

- roll the dice and compare result string. for example: `'4'`
- don't roll the dice. compare result to `'Not rolled yet`

### **Getter**

#### **dots**

- returns the number of dots.

#### **minimumValue**

- returns the lower bound of a dice. It should be 1.

#### **maximumValue**

- returns the upper bound of a dice.
