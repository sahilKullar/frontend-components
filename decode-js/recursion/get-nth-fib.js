// function getNthFib(n) {
//   if (n === 2) {
//     return 1;
//   } else if (n === 1) {
//     return 0;
//   } else {
//     return getNthFib(n - 1) + getNthFib(n - 2);
//   }
// }
//
// console.log(getNthFib(6));

function getNthFib(n, memoize = { 1: 0, 2: 1 }) {
  if (n in memoize) {
    return memoize[n];
  }
  memoize[n] = getNthFib(n - 1, memoize) + getNthFib(n - 2, memoize);
  return memoize[n];
}

console.log(getNthFib(6));
