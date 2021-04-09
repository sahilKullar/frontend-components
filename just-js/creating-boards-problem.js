// Problem statement #
//
// The game designer gives you three arguments: length, width, and pieces. Each argument is as follows:
//
// length (First argument): This is the length of the outer array of the two-dimensional array representation of the board.
// width (Second argument): This is the length of the inner arrays of the two-dimensional array representation of the board.
// pieces (Third argument): This is an array of objects where each object has the following properties:
// row: Has a number value representing the index of the outer array of two-dimensional array representations of the board.
// col: Has a number value representing the index of the inner array of two-dimensional array representations of the board.
// value: Is the string value representing the piece that will be assigned to the respective index inside the two-dimensional array representation of the board.
//
// Create a two-dimensional array of the respective length and width and populate it with the pieces’ values of the objects residing in the array, passed to the third (pieces) argument. All unpopulated indices will be assigned to " " value (a string with only a single space character).
//
// NOTE: Make sure to ignore the objects with an out of bounds index in the array of pieces.

const generate = function (length, width, pieces) {
  // Create array of size length  and fill with " " using fill method
  let board = new Array(length).fill(" ");
  // Assign array at each index to a new array of size width and fill with " "
  board = board.map((_) => new Array(width).fill(" "));

  // Populate the board through forEach method on pieces array
  pieces.forEach((piece) => {
    // Create check for out of bounds
    // If out of bounds, return
    if (piece["row"] >= length || piece["col"] >= width) return;
    if (piece["row"] < 0 || piece["col"] < 0) return;
    // The piece is not out of bounds and so it is assigned to the board
    board[piece["row"]][piece["col"]] = piece["value"];
  });
  return board;
};
// Create a list of objects which represent pieces to be added in board
// Note that the last piece is incorrect
const sample_pieces = [
  { row: 0, col: 0, value: "X" },
  { row: 0, col: 1, value: "O" },
  { row: 0, col: 2, value: "O" },
  { row: 1, col: 0, value: "X" },
  { row: 1, col: 1, value: "X" },
  { row: 1, col: 2, value: "O" },
  { row: 2, col: 0, value: "X" },
  { row: 2, col: 1, value: "O" },
  { row: 2, col: 2, value: "O" },
  { row: 4, col: 3, value: "W" },
];

const board = generate(3, 3, sample_pieces); // Generate board
console.log(board);
