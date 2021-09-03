"use strict";

const PhoneRegister = require("../PhoneRegister");
const phones = require("../phones.json");

describe("Testing constructor", () => {
  test("object created", () => {
    const phoneRegister = new PhoneRegister(phones);
    expect(phoneRegister.phoneRegister).toEqual(phones);
  });

  test('missing parameter throws an exception "phone data missing"', () => {
    expect(() => new PhoneRegister()).toThrow("phone data missing");
  });
});

describe("Testing getTypes", () => {
  test("use default jsonData", () => {
    const phoneRegister = new PhoneRegister(phones);
    expect(phoneRegister.getTypes()).toEqual(["home", "work", "mobile"]);
    //expect(phoneRegister.getTypes().sort()).toEqual( ["home", "work", "mobile"].sort());
  });

  test("person have no phones", () => {
    const testData = [
      {
        firstname: "Leila",
        lastname: "Hökki",
        phones: [],
      },
      {
        firstname: "Matt",
        lastname: "River",
        phones: [],
      },
    ];
    const phoneRegister = new PhoneRegister(testData);
    expect(phoneRegister.getTypes()).toEqual([]);
  });

  test("no persons in phoneRegister", () => {
    const phoneRegister = new PhoneRegister([]);
    expect(phoneRegister.getTypes()).toEqual([]);
  });
});
