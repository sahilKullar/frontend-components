function riverSizes(matrix) {
  const sizes = [];
  const visited = matrix.map((row) => row.map((value) => false));
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (visited[i][j]) continue;
      traverseNode(i, j, matrix, visited, sizes);
    }
  }
  return sizes;
}

function traverseNode(i, j, matrix, visited, sizes) {
  let currentRiverSize = 0;
  const nodeToExplore = [[i, j]];
  while (nodeToExplore.length) {
    // const currentNode = nodeToExplore.pop();
    // i = currentNode[0];
    // j = currentNode[1];
    [i, j] = nodeToExplore.pop();
    if (visited[i][j]) continue;
    visited[i][j] = true;
    if (matrix[i][j] === 0) continue;
    currentRiverSize++;
    const unvisitedNeighbour = getUnvisitedNeighbour(i, j, matrix, visited);
    for (const neighbour of unvisitedNeighbour) {
      nodeToExplore.push(neighbour);
    }
  }
  if (currentRiverSize > 0) sizes.push(currentRiverSize);
}

function getUnvisitedNeighbour(i, j, matrix, visited) {
  const unvisitedNeighbour = [];
  if (i > 0 && !visited[i - 1][j]) unvisitedNeighbour.push([i - 1, j]);
  if (i < matrix.length - 1 && !visited[i + 1][j])
    unvisitedNeighbour.push([i + 1, j]);
  if (j > 0 && !visited[i][j - 1]) unvisitedNeighbour.push([i, j - 1]);
  if (j < matrix[0].length - 1 && !visited[i][j + 1])
    unvisitedNeighbour.push([i, j + 1]);
  // console.log(unvisitedNeighbour);
  return unvisitedNeighbour;
}

const testInput = [
  [1, 0, 0, 1, 0],
  [1, 0, 1, 0, 0],
  [0, 0, 1, 0, 1],
  [1, 0, 1, 0, 1],
  [1, 0, 1, 1, 0],
];
const expected = [1, 2, 2, 2, 5];
// chai.expect(program.riverSizes(testInput).sort((a, b) => a - b)).to.deep.equal(expected)
console.log(riverSizes(testInput).sort((a, b) => a - b));
console.log(expected);
