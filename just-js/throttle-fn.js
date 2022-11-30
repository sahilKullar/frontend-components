function throttleFn(fn, time) {
  let timerID;
  return function (...args) {
    if (timerID) return;
    timerID = setTimeout(() => {
      fn.apply(this, arguments);
    }, time);
  };
}

const throttled = throttleFn(console.log, 3000);
throttled("hello! 1");
throttled("hello! 2");
throttled("hello! 3");
throttled("hello! 4");
