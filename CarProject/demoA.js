"use strict";

// const search = require("./carstorageNoFile");
// const search = require("./carstorageFileVersionNotWorking");
const search = require("./carstorageFileVersionPromises");

console.log(search());
console.log("one");
console.log(search("model", "Nova"));
console.log("two");
console.log(search("licence", "XYZ-123"));
console.log("three");
