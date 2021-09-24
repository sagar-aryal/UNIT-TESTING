"use strict";

const search = require("./carstorageFileCallback2");

try {
  search("model", "Nova", console.log);
  search();
} catch (err) {
  console.log(err.message);
}

search("model", "Nova", console.log);
