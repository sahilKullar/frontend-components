function throttle(callback, delay) {
  let timerID;
  let lastCalledTime = 0;

  const throttledFunction = function (...args) {
    const currentTime = new Date();
    const timeSinceLastCall = currentTime - lastCalledTime;
    const delayRemaining = delay - timeSinceLastCall;

    if (delayRemaining <= 0) {
      lastCalledTime = currentTime;
      callback.apply(this, args);
    } else {
      clearTimeout(timerID);
      timerID = setTimeout(() => {
        lastCalledTime = Date.now();
        callback.apply(this, args);
      }, delayRemaining);
    }
  };
  throttledFunction.cancel = function () {
    clearTimeout(timerID);
  };
  return throttledFunction;
}

const sum = (...numbers) =>
  numbers.reduce((total, number) => total + number, 0);
const object = {};
object.throttled = throttle(sum, 1000);
console.log(object.throttled());

const throttled = throttle(console.log, 3000);
document.addEventListener("keypress", () => throttled(currentTime));

const throttledAgain = throttle(console.log, 3000);
throttledAgain("hello! 1");
throttledAgain("hello! 2");
throttledAgain("hello! 3");
throttledAgain("hello! 4");
