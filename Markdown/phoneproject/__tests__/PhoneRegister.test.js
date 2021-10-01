'use strict';

const PhoneRegister = require('../PhoneRegister');
const phones = require('../phones.json');

describe('constructor', ()=>{
    test('object created', ()=>{
        const phoneRegister=new PhoneRegister(phones);
        expect(phoneRegister.phoneRegister).toEqual(phones);
    });

    test('missing parameter throws an exception "phone data missing"', ()=>{
        expect(() => new PhoneRegister()).toThrow('phone data missing');
    });
});

describe('Testing getTypes', ()=>{
    test('use default jsonData', ()=>{
        const phoneRegister = new PhoneRegister(phones);
        expect(phoneRegister.getTypes()).toEqual(["home", "work", "mobile"]);
        // expect(phoneRegister.getTypes().sort())-
        //      .toEqual(["home", "work", "mobile"].sort());
    });

    test('persons have no phones',()=>{
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
        const phoneRegister=new PhoneRegister(testData);
        expect(phoneRegister.getTypes()).toEqual([]);
    });

    test('no persons in phoneRegister', ()=>{
        const phoneRegister=new PhoneRegister([]);
        expect(phoneRegister.getTypes()).toEqual([]);
    });
});

describe('Testing getNumbersByType', ()=>{
    const phoneRegister=new PhoneRegister(phones);
    
    test('get from default jsonData with parameters Leila, Hökki, work',()=>{
        expect(phoneRegister.getNumbersByType('Leila', 'Hökki', 'work')).toEqual(["87654321", "05040302"]);
    });

    test('get from default jsonData with parameters Matt, River, mobile', ()=>{
        expect(phoneRegister.getNumbersByType('Matt', 'River', 'mobile')).toEqual(["04123456"]);
    });

    describe('wrong type or name returns an empty array',()=>{
        const testValues=[
            //firstname,  lastname,  type,   expected
            ['Matt',      'River',  'x',     []],
            ['Matt',      'x',      'mobile',[]],
            ['x',         'River',  'mobile',[]]
        ];

        test.each(testValues)('getNumbersByType("%s","%s","%s") returns %s',(firstname,lastname,type, expected)=>{
            expect(phoneRegister.getNumbersByType(firstname,lastname,type)).toEqual(expected);
        });
    });

    describe('missing parameter throws an exception',()=>{
        test('one parameter missing',()=>{
            expect(()=>phoneRegister.getNumbersByType('Leila', 'Hökki')).toThrow('missing parameter');
        });

        test('two parameters missing', () => {
            expect(() => phoneRegister.getNumbersByType('Leila')).toThrow('missing parameter');
        });

        test('all parameters missing', () => {
            expect(() => phoneRegister.getNumbersByType()).toThrow('missing parameter');
        });
    });

});


describe('Testing getAllNumbersByType',()=>{
    const phoneRegister=new PhoneRegister(phones);

    test('get all work numbers', ()=>{
        const expectedResult = [
            { "firstname": "Leila", "lastname": "Hökki", "number": { "type": "work", "tel": "87654321" } },
            { "firstname": "Leila", "lastname": "Hökki", "number": { "type": "work", "tel": "05040302" } },
            { "firstname": "Matt", "lastname": "River", "number": { "type": "work", "tel": "32145678" } }
        ];
        expect(phoneRegister.getAllNumbersByType('work')).toEqual(expectedResult);
    });

    test('get all mobile numbers', ()=>{
        expect(phoneRegister.getAllNumbersByType('mobile')).toEqual([
            { "firstname": "Matt", "lastname": "River", "number": { "type": "mobile", "tel": "04123456" } }
        ]);
    });

    test('type "x" will return an empty array []',()=>{
        expect(phoneRegister.getAllNumbersByType('x')).toEqual([]);
    });

    test('missing parameter throws an exception', ()=>{
        expect(() => phoneRegister.getAllNumbersByType()).toThrow('missing parameter');
    });
});

describe('Testing getAllNumbers', ()=>{
    test('get all with default data',()=>{
        const phoneRegister=new PhoneRegister(phones);
        expect(phoneRegister.getAllNumbers()).toEqual(phones);
    });

    test('some phones missing',()=>{
        const testData = [
            {
                "firstname": "Leila",
                "lastname": "Hökki",
                "phones": [
                    { "type": "home", "number": "12345678" },
                    { "type": "work", "number": "87654321" },
                    { "type": "work", "number": "05040302" }
                ]
            },
            {
                "firstname": "Matt",
                "lastname": "River",
                "phones": []
            }
        ];

        const expectedResult = [
            {
                "firstname": "Leila",
                "lastname": "Hökki",
                "phones": [
                    { "type": "home", "number": "12345678" },
                    { "type": "work", "number": "87654321" },
                    { "type": "work", "number": "05040302" }
                ]
            }
        ];
        const phoneRegister = new PhoneRegister(testData);
        expect(phoneRegister.getAllNumbers()).toEqual(expectedResult)
    });

    test('all phones missing', ()=>{
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
        expect(phoneRegister.getAllNumbers()).toEqual([]);
    });

    test('all persons missing', ()=>{
        const phoneRegister = new PhoneRegister([]);
        expect(phoneRegister.getAllNumbers()).toEqual([]);
    });
});

describe('Testing getName', ()=>{
    const phoneRegister = new PhoneRegister(phones);

    test('get name of the number "12345678"', ()=>{
        expect(phoneRegister.getName('12345678'))
            .toEqual({ "firstname": "Leila", "lastname": "Hökki" });
    });
    
    test('wrong number', () => {
        expect(phoneRegister.getName('0000')).toBeNull();
    });

    test('parameter missing', () => {
        expect(phoneRegister.getName()).toBeNull();
    });

    describe('get names by numbers from default data',()=>{
        const testValues = [
            ["12345678", { "firstname": "Leila", "lastname": "Hökki" }],
            ["87654321", { "firstname": "Leila", "lastname": "Hökki" }],
            ["56789012", { "firstname": "Matt", "lastname": "River" }],
        ];

        test.each(testValues)('number %s returns %p', (number, expectedValue)=>{
            expect(phoneRegister.getName(number)).toEqual(expectedValue);
        });
    });

  
});