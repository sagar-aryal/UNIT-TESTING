"use strict";

const Dice = require("./dice");

const diceA = new Dice();
const diceB = new Dice();

console.log("diceA:", diceA.toString());
console.log("diceB:", +diceB);

diceA.roll();
diceB.roll();

console.log("diceA:", diceA.toString());
console.log("diceB:", +diceB);

if (diceA.dots === diceB.dots) {
  console.log("tie");
} else if (diceA.dots > diceB.dots) {
  console.log("diceA wins");
} else {
  console.log("diceB wins");
}
