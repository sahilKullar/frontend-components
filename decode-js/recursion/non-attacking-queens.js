function nonAttackingQueens(n) {
  const blockedColumns = new Set();
  const blockedUpDiagonals = new Set();
  const blockedDownDiagonals = new Set();
  return getNumberOfNonAttackingQueenPlacements(
    0,
    blockedColumns,
    blockedUpDiagonals,
    blockedDownDiagonals,
    n
  );
}

function getNumberOfNonAttackingQueenPlacements(
  row,
  blockedColumns,
  blockedUpDiagonals,
  blockedDownDiagonals,
  boardSize
) {
  if (row === boardSize) return 1;

  let validPlacements = 0;
  for (let col = 0; col < boardSize; col++) {
    if (
      isNonAttackingPlacement(
        row,
        col,
        blockedColumns,
        blockedUpDiagonals,
        blockedDownDiagonals
      )
    ) {
      placeQueen(
        row,
        col,
        blockedColumns,
        blockedUpDiagonals,
        blockedDownDiagonals
      );
      validPlacements += getNumberOfNonAttackingQueenPlacements(
        row + 1,
        blockedColumns,
        blockedUpDiagonals,
        blockedDownDiagonals,
        boardSize
      );
      removeQueen(
        row,
        col,
        blockedColumns,
        blockedUpDiagonals,
        blockedDownDiagonals
      );
    }
  }
  return validPlacements;
}

function isNonAttackingPlacement(
  row,
  col,
  blockedColumns,
  blockedUpDiagonals,
  blockedDownDiagonals
) {
  if (blockedColumns.has(col)) return false;
  if (blockedUpDiagonals.has(row + col)) return false;
  if (blockedDownDiagonals.has(row - col)) return false;
  return true;
}

function placeQueen(
  row,
  col,
  blockedColumns,
  blockedUpDiagonals,
  blockedDownDiagonals
) {
  blockedColumns.add(col);
  blockedUpDiagonals.add(row + col);
  blockedDownDiagonals.add(row - col);
}

function removeQueen(
  row,
  col,
  blockedColumns,
  blockedUpDiagonals,
  blockedDownDiagonals
) {
  blockedColumns.delete(col);
  blockedUpDiagonals.delete(row + col);
  blockedDownDiagonals.delete(row - col);
}

const input = 4;
const expected = 2;
console.log(nonAttackingQueens(input));
