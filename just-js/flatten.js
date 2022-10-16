function flatten(value) {
  if (typeof value !== "object" || value === null) return value;
  if (Array.isArray(value)) return flattenArray(value);
  return flattenObject(value);
}

function flattenArray(array) {
  return array.reduce((acc, curr) => acc.concat(flatten(curr)), []);
}

function flattenObject(object) {
  let flattenObj = {};
  for (const [key, value] of Object.entries(object)) {
    const valueIsObject =
      typeof value === "object" && value !== null && !Array.isArray(value);
    const flattenedValue = flatten(value);
    if (valueIsObject) {
      Object.assign(flattenObj, flattenedValue);
    } else {
      flattenObj[key] = flattenedValue;
    }
  }
  return flattenObj;
}

console.log(flatten(1));
console.log(flatten([]));
console.log(flatten([1, 2, [3, 4, [], 5]]));
console.log(flatten({}));
console.log(
  flatten({ a: null, b: undefined, c: { d: true, e: 4, f: {}, g: { h: 5 } } })
);
console.log(
  flatten([1, 2, [3], { a: 4, b: { c: 5, d: [6, 7, [8, 9, [10]]] } }])
);
