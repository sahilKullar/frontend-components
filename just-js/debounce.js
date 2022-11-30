function debounce(callback, delay, immediate = false) {
  let timerID;

  return function (...args) {
    clearInterval(timerID);
    const shouldCallImmediately = timerID == null && immediate;
    if (shouldCallImmediately) {
      callback.apply(this, args);
    }

    timerID = setTimeout(() => {
      if (!immediate) {
        callback.apply(this, args);
      }
      timerID = null;
    }, delay);
  };
}

const debounced = debounce(console.log, 3000, true);
debounced("hello! 1");
debounced("hello! 2");
debounced("hello! 3");
debounced("hello! 4");

console.log("--------");

const debouncedImmediately = debounce(console.log, 3000, false);
debouncedImmediately("hello! 1");
debouncedImmediately("hello! 2");
debouncedImmediately("hello! 3");
debouncedImmediately("hello! 4");
