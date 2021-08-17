function nonConstructableChange(coins) {
  coins.sort((a, b) => a - b);
  let currentChangedCreated = 0;
  for (const coin of coins) {
    if (coin > currentChangedCreated + 1) return currentChangedCreated + 1;
    currentChangedCreated += coin;
  }
  return currentChangedCreated + 1;
}

const input = [5, 7, 1, 1, 2, 3, 22];
const expected = 20;
console.log(nonConstructableChange(input));
