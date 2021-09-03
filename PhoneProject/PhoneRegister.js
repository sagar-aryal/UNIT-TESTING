"use strict";

module.exports = class PhoneRegister {
  constructor(data) {
    if (data) {
      this.phoneRegister = data;
    } else {
      throw new Error("phone data missing");
    }
  }

  getTypes() {
    const types = [];
    for (let person of this.phoneRegister) {
      for (let phone of person.phones) {
        if (!types.includes(phone.type)) {
          types.push(phone.type);
        }
      }
    }
    return types;
  }
};
