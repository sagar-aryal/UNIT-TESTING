'use strict';

const expect = require('chai').expect;

const Dice = require('../dice');

describe('methods defined', function(){
    const dice = new Dice();

    it('getter maximumValue defined', function(){
        expect(dice).to.have.a.property('maximumValue');
    });
    it('getter minimumValue defined', function () {
        expect(dice).to.have.a.property('minimumValue');
    });
    it('getter dots defined', function () {
        expect(dice).to.have.a.property('dots');
    });

    it('roll is defined', function(){
        expect(dice).to.have.a.property('roll');
    });

    //toString is always there, so no need to test that
    // it('toString is defined', function(){
    //     expect(dice).to.have.a.property('toString');
    // });
});

describe('Create a dice with no upper bound given', function(){
    const dice = new Dice();

    it('maximum dot count is 6', function(){
        expect(dice.maximumValue).to.equal(6);
    });

    it('minimum dot count is 1', function(){
        expect(dice.minimumValue).to.equal(1);
    });

    it('dots is 0', function(){
        expect(dice.dots).to.equal(0);
    });

});

describe('create dice with given upper bounds 2-20', function(){
    function testUpperBound(upperBound){
        const dice = new Dice(upperBound);
        it(`upper bound is ${upperBound}`, function(){
            expect(dice.maximumValue).to.equal(upperBound);
        });
    };

    for(let uBound=2; uBound<21; uBound++){
        testUpperBound(uBound);
    }
});

describe('Create a dice with given upper bound 2-20 version 2', function() {
    const testCases = new Array(19).fill(2).map((value, ind) => value + ind);

    testCases.forEach(function(uBound){
        it(`upper bound is ${uBound}`, function(){
            const dice=new Dice(uBound);
            expect(dice.maximumValue).to.equal(uBound);
        });
    });
});

describe('Test exceptions', function(){
    const testCases = [
        { uBound: -1, expected: 'Upper bound too small'},
        { uBound: 0, expected: 'Upper bound too small'},
        { uBound: 1, expected: 'Upper bound too small'},
        { uBound: 21, expected: 'Upper bound too big'},
        { uBound: 'a', expected: 'upper bound must be an integer'},
        { uBound: 2.5, expected: 'upper bound must be an integer'}  
    ];

    testCases.forEach(function(testCase){
        it(`Upper bound ${testCase.uBound} throws ${testCase.expected}`, function(){
            expect(function(){
                new Dice(testCase.uBound);
            }).to.throw(testCase.expected);
        });
    });
});

describe('Test Upper bound too small', function () {

    [-1, 0, 1].forEach(function (uBound) {
        it(`Upper bound ${uBound} throws Upper bound too small`, function () {
            expect(function () {
                new Dice(uBound);
            }).to.throw('Upper bound too small');
        });
    });
});

describe('test roll', function(){
    let dice;

    beforeEach(function(){
        dice= new Dice();
    });

    it('test when dice hasn\'t been rolled',function(){
        expect(dice.dots).to.equal(0);
    });

    it('test when rolled', function(){
        dice.roll();
        expect(dice.dots).to.be.within(1,6);
    });
});

describe('test toString', function(){
    let dice;

    beforeEach(function(){
        dice = new Dice();
    });

    it('dice is rolled', function(){
        dice.roll();
        expect(dice.toString()).to.equal(`${dice.dots}`);
    });

    it('dice is not rolled yet', function () {
        expect(dice.toString()).to.equal('Not rolled yet');
    });
    
});
