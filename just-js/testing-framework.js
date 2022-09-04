function describe(testSuiteName, func) {}

function it(testCaseName, func) {
  try {
  } catch (e) {}
}

function expect(actual) {
  return new ExpectFunctions(actual);
}

class ExpectFunctions {
  constructor(actual) {
    this.actual = actual;
    this.stringifiedActual = JSON.stringify(actual);
  }

  toExist() {
    // this.actual === null && this.actual === undefined
    if (this.actual == null) {
      throw `expected value to exist but got ${this.stringifiedActual}`;
    }
  }

  toBe(expected) {
    if (this.actual !== expected) {
      throw `expected ${this.stringifiedActual} to be ${JSON.stringify(
        expected
      )}`;
    }
  }

  toBeType(type) {
    if (typeof this.actual !== type) {
      throw `expected ${
        this.stringifiedActual
      } to be of type ${type} but got ${typeof this.actual}`;
    }
  }
}
