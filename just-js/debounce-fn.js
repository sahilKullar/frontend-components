function debounceFn(fn, time) {
  let timerID;
  return function (...args) {
    if (timerID) clearTimeout(timerID);
    timerID = setTimeout(() => {
      fn.apply(this, arguments);
      timerID = null;
    }, time);
  };
}

const debounced = debounceFn(console.log, 3000);
debounced("hello! 1");
debounced("hello! 2");
debounced("hello! 3");
debounced("hello! 4");
