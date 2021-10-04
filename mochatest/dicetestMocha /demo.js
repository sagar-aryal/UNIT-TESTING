'use strict';

const testCases =
    new Array(19).fill(2).map((value, ind) => ({ uBound: value + ind }));
console.log(testCases);

const testCasesB =
    new Array(19).fill(2).map((value, ind) => {
        return ({ uBound: value + ind });
    });
console.log(testCasesB);


const testCases2 =
    new Array(19).fill(2).map((value, ind) => value + ind );
console.log(testCases2);