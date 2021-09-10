'use strict';

const register = require('./phones.json');

console.log(register[0].firstname);
console.log(register[1].firstname);

console.log(register[0].phones);
console.log(register[0].phones[0].type);
console.log(register[0].phones[0].number);


for(let person of register) {
    console.log(`${person.firstname} ${person.lastname}`);
}
console.log('#############');
for(let person of register) {
    console.log(`${person.firstname} ${person.lastname}`);
    for(let phone of person.phones){
        console.log(`\t${phone.type}: ${phone.number}`);
    }
}