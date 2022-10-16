/* jshint ignore:start */
const STATE = {
  PENDING: "pending",
  FULFILLED: "fulfilled",
  REJECTED: "rejected",
};

class MyPromise {
  #state = STATE.PENDING;
  #value = null;
  #fulfilledCallbacks = [];
  #rejectedCallbacks = [];

  constructor(executorFunc) {
    try {
      executorFunc(
        (value) => this.#resolve(value),
        (value) => this.#reject(value)
      );
    } catch (error) {
      this.#reject(error);
    }
  }

  then(onFulfilled, onRejected) {
    return new MyPromise((resolve, reject) => {
      const fulfilledCallback = () => {
        if (!onFulfilled) return resolve(this.#value);

        queueMicrotask(() => {
          try {
            const value = onFulfilled(this.#value);
            resolve(value);
          } catch (error) {
            reject(error);
          }
        });
      };

      const rejectedCallback = () => {
        if (!onRejected) return reject(this.#value);

        queueMicrotask(() => {
          try {
            const value = onRejected(this.#value);
            resolve(value);
          } catch (error) {
            reject(error);
          }
        });
      };

      switch (this.#state) {
        case STATE.PENDING:
          this.#fulfilledCallbacks.push(fulfilledCallback);
          this.#rejectedCallbacks.push(rejectedCallback);
          break;
        case STATE.FULFILLED:
          fulfilledCallback();
          break;
        case STATE.REJECTED:
          rejectedCallback();
          break;
        default:
          throw new Error("Unexpected promise state");
      }
    });
  }

  get state() {
    return this.#state;
  }

  get value() {
    return this.#value;
  }

  catch(onRejected) {
    return this.then(null, onRejected);
  }

  #resolve(value) {
    this.#state = STATE.FULFILLED;
    this.#value = value;
    this.#fulfilledCallbacks.forEach((callback) => callback());
  }

  #reject(value) {
    this.#state = STATE.REJECTED;
    this.#value = value;
    this.#rejectedCallbacks.forEach((callback) => callback());
  }
}

/* jshint ignore:end */

const promise = new MyPromise((res, rej) => {
  res(10);
});
promise
  .then((value) => {
    console.log(value);
    return value + 10;
  })
  .then((value) => {
    console.log(value);
    return value + 10;
  })
  .then(
    // (value) => {
    //   console.log(value);
    //   return value + 10;
    // },
    (value) => {
      console.log("Error: " + value);
      return value + 20;
    }
  )
  .then((value) => {
    console.log(value);
    throw value + 10;
  })
  .catch((value) => {
    console.log("Error: " + value);
    return value + 10;
  })
  .then((value) => {
    console.log(value);
  });

console.log("End"); // this line runs before the then/catch chain

const nextPromise = new MyPromise((res, rej) => {
  res(10);
});

nextPromise.then((value) => {
  console.log(value);
  return value + 10;
});

nextPromise.then((value) => {
  console.log(value);
  return value + 5;
});
