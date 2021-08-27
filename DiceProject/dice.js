"use strict";

module.exports = class Dice {
  constructor(upperBound = 6) {
    if (!Number.isInteger(upperBound)) {
      throw new Error("Upper bound must be integer");
    }

    if (upperBound > 20) {
      throw new Error("Upper bound too big");
    }

    if (upperBound < 2) {
      throw new Error("Upper bound too small");
    }

    this.upperBound = upperBound;
    this.dotCount = 0;
  }

  get dots() {
    return this.dotCount;
  }

  get maximumValue() {
    return this.upperBound;
  }

  get minimumValue() {
    return 1;
  }

  roll() {
    this.dotCount = Math.ceil(Math.random() * this.upperBound);
  }

  toString() {
    if (this.dotCount === 0) {
      return "Not rolled yet";
    } else {
      return `${this.dots}`;
    }
  }
};
