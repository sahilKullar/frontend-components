function removeIslands(matrix) {
  // const onesConnectedToBorder = [];
  // for (let row = 0; row < matrix.length; row++) {
  //   onesConnectedToBorder.push([]);
  //   for (let col = 0; col < matrix[row].length; col++) {
  //     onesConnectedToBorder[row].push(false);
  //   }
  // }

  const onesConnectedToBorder = matrix.map((row) => row.map((value) => false));

  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      const rowIsBorder = row === 0 || row === matrix.length - 1;
      const colIsBorder = col === 0 || col === matrix[row].length - 1;
      const isBorder = rowIsBorder || colIsBorder;
      if (!isBorder) continue;
      if (matrix[row][col] !== 1) continue;
      findOnesConnectedToBorder(row, col, matrix, onesConnectedToBorder);
    }
  }

  for (let row = 1; row < matrix.length - 1; row++) {
    for (let col = 1; col < matrix[row].length - 1; col++) {
      if (onesConnectedToBorder[row][col]) continue;
      matrix[row][col] = 0;
    }
  }
  return matrix;
}

function findOnesConnectedToBorder(
  startRow,
  startCol,
  matrix,
  onesConnectedToBorder
) {
  const stack = [[startRow, startCol]];
  while (stack.length) {
    const [currentRow, currentCol] = stack.pop();
    if (onesConnectedToBorder[currentRow][currentCol]) continue;
    onesConnectedToBorder[currentRow][currentCol] = true;
    const neighbors = getNeighbors(currentRow, currentCol, matrix);
    for (const neighbor of neighbors) {
      const [row, col] = neighbor;
      if (matrix[row][col] !== 1) continue;
      stack.push(neighbor);
    }
  }
}

function getNeighbors(row, col, matrix) {
  const neighbors = [];
  const rowNums = matrix.length;
  const colNums = matrix[row].length;
  if (row - 1 >= 0) neighbors.push([row - 1, col]);
  if (row + 1 < rowNums) neighbors.push([row + 1, col]);
  if (col - 1 >= 0) neighbors.push([row, col - 1]);
  if (col + 1 < colNums) neighbors.push([row, col + 1]);
  return neighbors;
}

const input = [
  [1, 0, 0, 0, 0, 0],
  [0, 1, 0, 1, 1, 1],
  [0, 0, 1, 0, 1, 0],
  [1, 1, 0, 0, 1, 0],
  [1, 0, 1, 1, 0, 0],
  [1, 0, 0, 0, 0, 1],
];
const expected = [
  [1, 0, 0, 0, 0, 0],
  [0, 0, 0, 1, 1, 1],
  [0, 0, 0, 0, 1, 0],
  [1, 1, 0, 0, 1, 0],
  [1, 0, 0, 0, 0, 0],
  [1, 0, 0, 0, 0, 1],
];
console.log(removeIslands(input));
