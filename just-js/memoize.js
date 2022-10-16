function memoize(callback, resolver) {
  const cache = new Map();

  function getCacheKey(args) {
    return resolver != null ? resolver(...args) : JSON.stringify(args);
  }

  const memoized = (...args) => {
    const cacheKey = getCacheKey(args);

    if (cache.has(cacheKey)) {
      return cache.get(cacheKey);
    }

    const output = callback(...args);
    cache.set(cacheKey, output);
    return output;
  };

  memoized.clear = function () {
    cache.clear();
  };

  memoized.has = function (...args) {
    const cacheKey = getCacheKey(args);
    return cache.has(cacheKey);
  };

  memoized.delete = function (...args) {
    const cacheKey = getCacheKey(args);
    cache.delete(cacheKey);
  };

  return memoized;
}

const callback = (...args) => args;
const memoized = memoize(callback);
console.log(memoized("123"));
console.log(memoized("123"));
console.log(memoized("123", "abc"));

const memoizedTwo = memoize(callback, (args) => args[0]);
console.log(memoizedTwo("123"));
console.log(memoizedTwo("123"));
console.log(memoizedTwo("123", "abc"));
console.log(memoized("abc", "123"));
console.log(memoizedTwo("abc"));
