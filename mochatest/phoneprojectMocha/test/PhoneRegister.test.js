'use strict';

const expect = require('chai').expect;

const PhoneRegister = require('../PhoneRegister');
const phones = require('../phones.json');

describe('testing constructor', function(){
    it('register created', function(){
        const phoneRegister = new PhoneRegister(phones);
        expect(phoneRegister.phoneRegister).to.deep.equal(phones);
    });

    it('missing parameter throws an exception', function(){
        expect(function(){
            new PhoneRegister();
        }).to.throw('phone data missing');
    });
});

describe('test getTypes', function(){
    it('using the default data', function(){
        const phoneRegister = new PhoneRegister(phones);
        expect(phoneRegister.getTypes()).to.deep.equal(['home','work','mobile'])
    });

    it('getTypes is defined', function(){
        const phoneRegister=new PhoneRegister(phones);
        expect(phoneRegister).to.have.a.property('getTypes');
    });

    describe('non-default data', function(){
        it('persons have no phones', function(){
            const testData = [
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
            ];

            const phoneRegister = new PhoneRegister(testData);
            expect(phoneRegister.getTypes()).to.deep.equal([]);
        });

        it('empty phoneRegister', function(){
            const phoneRegister = new PhoneRegister([]);
            expect(phoneRegister.getTypes()).to.deep.equal([]);
        });

    });
});

describe('testing getNumbersByType', function(){
    const phoneRegister = new PhoneRegister(phones);

    it('method getNumbersByType is defined', function(){
        expect(phoneRegister).to.have.a.property('getNumbersByType');
    });

    const testCases=[
        { firstname: 'Leila', lastname: 'Hökki', type: 'work', expected: ['87654321', '05040302']},
        { firstname: 'Matt', lastname: 'River', type: 'mobile', expected: ['04123456']},
        { firstname: 'Matt', lastname: 'River', type: 'z', expected: [] },
        { firstname: 'Matt', lastname: 'x', type: 'home', expected: [] },
        { firstname: 'x', lastname: 'River', type: 'home', expected: [] },
        { firstname: 'x', lastname: 'y', type: 'home', expected: [] },
        { firstname: 'x', lastname: 'y', type: 'z', expected: [] }
    ];

    testCases.forEach(function(tc){ //tc=testCase
        it(`getNumbersByType('${tc.firstname}','${tc.lastname}','${tc.type}') returns ${tc.expected}`, function(){
            expect(phoneRegister.getNumbersByType(tc.firstname,tc.lastname,tc.type)).to.deep.equal(tc.expected);
        });
    });

});