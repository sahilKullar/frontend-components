// Memoization
// Memoization is particularly useful for combinatorial problems that have large repeated state-space tree branches.
function fib(n, memo) {
  if (n in memo) return memo[n];
  if (n === 0 || n === 1) return n;
  const res = fib(n - 1, memo) + fib(n - 2, memo);
  memo[n] = res;
  return res;
}

const memo = {};
console.log(fib(1, memo));
console.log(fib(2, memo));
console.log(fib(3, memo));
console.log(fib(10, memo));
