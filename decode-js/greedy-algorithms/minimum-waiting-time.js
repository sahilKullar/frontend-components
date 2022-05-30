function minimumWaitingTime(queries) {
  queries.sort((a, b) => a - b);

  let totalWaitingTime = 0;
  for (let i = 0; i < queries.length; i++) {
    const duration = queries[i];
    const queriesLeft = queries.length - (i + 1);
    totalWaitingTime += duration * queriesLeft;
  }
  return totalWaitingTime;
}

const queries = [3, 2, 1, 2, 6];
// const expected = 17;
const actual = minimumWaitingTime(queries);
console.info(actual);
