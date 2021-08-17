function staircaseTraversal(height, maxSteps) {
  let currentNoOfWays = 0;
  const waysToTop = [1];
  for (let currentHeight = 1; currentHeight < height + 1; currentHeight++) {
    const startOfWindow = currentHeight - maxSteps - 1;
    const endOfWindow = currentHeight - 1;
    if (startOfWindow >= 0) currentNoOfWays -= waysToTop[startOfWindow];

    currentNoOfWays += waysToTop[endOfWindow];
    waysToTop.push(currentNoOfWays);
  }
  return waysToTop[height];
}

const stairs = 4;
const maxSteps = 2;
const expected = 5;
console.log(staircaseTraversal(stairs, maxSteps));
