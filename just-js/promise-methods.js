Promise.myRace = function (promises) {
  return new Promise((resolve, reject) => {
    promises.forEach((promise) => {
      promise.then(resolve).catch(reject);
    });
  });
};

Promise.myAny = function (promises) {
  return new Promise((resolve, reject) => {
    let rejectedCount = 0;
    promises.forEach((promise) => {
      promise.then(resolve).catch((_) => {
        rejectedCount++;
        if (rejectedCount === promises.length) {
          reject("all promises rejected");
        }
      });
    });
  });
};

Promise.myAll = function (promises) {
  return new Promise((resolve, reject) => {
    const results = [];
    let resolvedCount = 0;
    promises.forEach((promise, i) => {
      promise
        .then((value) => {
          results[i] = value;
          resolvedCount++;
          if (resolvedCount === promises.length) {
            resolve(results);
          }
        })
        .catch(reject);
    });
  });
};

Promise.myAllSettled = function (promises) {
  return new Promise(function (resolve) {
    const results = [];
    let settledCount = 0;
    promises.forEach((promise, i) => {
      promise
        .then((value) => {
          results[i] = { status: "fulfilled", value };
        })
        .catch((error) => {
          results[i] = { status: "rejected", error };
        })
        .finally(() => {
          settledCount++;
          if (settledCount === promises.length) {
            resolve(results);
          }
        });
    });
  });
};

// ----- Race -----
Promise.myRace([
  new Promise((res, rej) => setTimeout(() => rej(0), 500)),
  Promise.resolve(5),
  new Promise((res) => setTimeout(() => res(10), 1000)),
])
  .then(console.log)
  .catch((error) => console.log(`Error: ${error}`));

Promise.myRace([
  new Promise((res, rej) => setTimeout(() => rej(0), 500)),
  Promise.reject(5),
  new Promise((res) => setTimeout(() => res(10), 1000)),
])
  .then(console.log)
  .catch((error) => console.log(`Error: ${error}`));

// ----- Any -----
Promise.myAny([
  new Promise((res, rej) => setTimeout(() => rej(0), 500)),
  Promise.resolve(5),
  new Promise((res) => setTimeout(() => res(10), 1000)),
])
  .then(console.log)
  .catch((error) => console.log(`Error: ${error}`));

Promise.myAny([
  new Promise((res, rej) => setTimeout(() => rej(0), 500)),
  Promise.reject(5),
  new Promise((res) => setTimeout(() => res(10), 1000)),
])
  .then(console.log)
  .catch((error) => console.log(`Error: ${error}`));

// ----- All -----
Promise.myAll([
  new Promise((res, rej) => setTimeout(() => rej(0), 500)),
  Promise.resolve(5),
  new Promise((res) => setTimeout(() => res(10), 1000)),
])
  .then(console.log)
  .catch((error) => console.log(`Error: ${error}`));

Promise.myAll([
  new Promise((res, rej) => setTimeout(() => rej(0), 500)),
  Promise.reject(5),
  new Promise((res) => setTimeout(() => res(10), 1000)),
])
  .then(console.log)
  .catch((error) => console.log(`Error: ${error}`));

// ----- All Settled -----
Promise.myAllSettled([
  new Promise((res, rej) => setTimeout(() => rej(0), 500)),
  Promise.resolve(5),
  new Promise((res) => setTimeout(() => res(10), 1000)),
])
  .then(console.log)
  .catch((error) => console.log(`Error: ${error}`));

Promise.myAllSettled([
  new Promise((res, rej) => setTimeout(() => rej(0), 500)),
  Promise.reject(5),
  new Promise((res) => setTimeout(() => res(10), 1000)),
])
  .then(console.log)
  .catch((error) => console.log(`Error: ${error}`));
