function numberOfWaysToTraverseGraph(width, height) {
  // for (let i = 1; )
  const noOfWays = [];
  for (let i = 0; i < height + 1; i++) {
    noOfWays.push([]);
    for (let j = 0; j < width + 1; j++) {
      noOfWays[i].push(0);
    }
  }

  for (let widthIdx = 1; widthIdx < width + 1; widthIdx++) {
    for (let heightIdx = 1; heightIdx < height + 1; heightIdx++) {
      if (widthIdx === 1 || heightIdx === 1) {
        noOfWays[heightIdx][widthIdx] = 1;
      } else {
        const waysLeft = noOfWays[heightIdx][widthIdx - 1];
        const waysUp = noOfWays[heightIdx - 1][widthIdx];
        noOfWays[heightIdx][widthIdx] = waysLeft + waysUp;
      }
    }
  }
  return noOfWays[height][width];
}

const width = 4;
const height = 3;
const expected = 10;
console.log(numberOfWaysToTraverseGraph(width, height));
// chai.expect(actual).to.deep.equal(expected);
