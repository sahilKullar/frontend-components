function describe(testSuiteName, func) {
  console.log(`beginning test suite ${testSuiteName}`);
  try {
    func();
    console.log(`successfully completed test suite ${testSuiteName}`);
  } catch (error) {
    const { testCaseName, errorMessage } = error;
    console.error(
      `failed running test suite ${testSuiteName} on test case ${testCaseName} with error message ${errorMessage}`
    );
  }
}

function it(testCaseName, func) {
  console.log(`beginning test case ${testCaseName}`);
  try {
    func();
    console.log(`successfully completed test case ${testCaseName}`);
  } catch (errorMessage) {
    throw { testCaseName, errorMessage };
  }
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

describe("Passing Test Suite", () => {
  it("Passing Test Case #1", function () {
    expect("foo").toExist();
    expect(1 + 1).toBe(2);
  });

  it("Passing Test Case #2", function () {
    expect({}).toBeType("object");
  });
});

console.log("---------------------------------------------------------------");

describe("Failing Test Suite", () => {
  it("Passing Test Case", function () {
    expect(0).toBe(0);
  });

  it("Failing Test Case", function () {
    expect(true).toBe(true);
    expect(true).toBe(false);
  });

  it("Failing Test Case", function () {
    expect("foo").toBe("bar");
  });
});
