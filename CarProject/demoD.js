"use strict";

const search = require("./carstorageFileVersionPromises");

// search().then(console.log).catch(console.log);
// search("model", "XGT")
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err.message));

// search("licence", "ABC-1")
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err.message));

// (async () => {
//   try {
//     console.log(await search());
//     console.log("one");
//     console.log(await search("model", "XGT"));
//     console.log("two");
//     console.log(await search("licence", "ABC-1"));
//     console.log("three");
//   } catch (err) {
//     console.log(err.message);
//   }
// })();

async function run() {
  try {
    const result = await search();
    for (let car of result) {
      console.log(car.model.toUpperCase());
    }
    const licenceResult = await search("licence", "ABC-1");
    if (licenceResult.length > 0) {
      console.log(licenceResult[0].model);
    } else {
      console.log("no car found");
    }
  } catch (err) {
    console.log(err.message);
  }
}

run();
