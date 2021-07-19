function mergeOverlappingIntervals(array) {
  const sortedIntervals = array.sort((a, b) => a[0] - b[0]);
  const mergedIntervals = [];
  let currentInterval = sortedIntervals[0];
  mergedIntervals.push(currentInterval);
  for (let nextInterval of sortedIntervals) {
    const [_, currentIntervalEnd] = currentInterval;
    const [nextIntervalStart, nextIntervalEnd] = nextInterval;

    if (currentIntervalEnd >= nextIntervalStart) {
      currentInterval[1] = Math.max(currentIntervalEnd, nextIntervalEnd);
    } else {
      currentInterval = nextInterval;
      mergedIntervals.push(currentInterval);
    }
  }
  return mergedIntervals;
}

const intervals = [
  [1, 2],
  [3, 5],
  [4, 7],
  [6, 8],
  [9, 10],
];
// const expected = [
//   [1, 2],
//   [3, 8],
//   [9, 10],
// ];
console.log(mergeOverlappingIntervals(intervals));
