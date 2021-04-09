class Grid {
  constructor(arr) {
    if (arr === undefined) {
      // create 6x6 grid random
      let temp = new Array(6);
      for (let i = 0; i < temp.length; i++) {
        temp[i] = new Array(6);
        for (let j = 0; j < temp[i].length; j++) {
          // assign random number between 0 and 1
          temp[i][j] = Math.round(Math.random());
        }
      }
      this.grid = temp;
    } else {
      this.grid = new Array(arr.length);
      for (let i = 0; i < arr.length; i++) {
        // copy array elements
        this.grid[i] = arr[i].slice();
      }
    }
  }
  // Helper function to print the grid
  printArray() {
    // Iterate the grid
    for (let i = 0; i < this.grid.length; i++) {
      for (let j = 0; j < this.grid[i].length; j++) {
        // Print X or O
        if (this.grid[i][j] === 0) process.stdout.write(`X `);
        else process.stdout.write(`O `);
      }
      console.log("");
    }
  }
}

// Create MazeSolver class below
class MazeSolver extends Grid {
  constructor(arr) {
    super(arr); // initialize the grid
  }
  canTraverse(x, y) {
    // check bounds
    if (x < 0 || y < 0) return false;
    else if (x >= this.grid.length) return false;
    else if (y >= this.grid[x].length) return false;
    // check if 0 or not
    else if (this.grid[x][y] === 0) return false;
    else return true; // all passsed
  }

  getNeighbours(x, y) {
    // return array of neighbours
    let neighbours = [];
    // up
    if (this.canTraverse(x - 1, y)) neighbours.push([x - 1, y]);
    // down
    if (this.canTraverse(x + 1, y)) neighbours.push([x + 1, y]);
    // left
    if (this.canTraverse(x, y - 1)) neighbours.push([x, y - 1]);
    // right
    if (this.canTraverse(x, y + 1)) neighbours.push([x, y + 1]);
    return neighbours;
  }

  checkVisited(x, y, visited) {
    // traverse array for visited
    // console.log(x,y,visited)
    for (let i = 0; i < visited.length; i++) {
      if (visited[i][0] === x && visited[i][1] === y) {
        return true;
      }
    }
    return false;
  }

  solve(x1, y1, x2, y2) {
    // solve from coordinates (x, y)
    let stack = []; // maintain coordinates
    let visited = [];
    // check if initial position can be traversed
    if (this.canTraverse(x1, y1)) {
      visited.push([x1, y1]);
      stack.push([x1, y1]);
    }
    let solved = false;
    while (stack.length > 0) {
      let currentPos = stack.pop();
      if (currentPos[0] === x2 && currentPos[1] === y2) {
        // target found and so exit loop
        solved = true;
        break;
      }
      // target not found and so traverse neighbours
      let neighbours = this.getNeighbours(currentPos[0], currentPos[1]);
      for (let i = 0; i < neighbours.length; i++) {
        // check visited and if not, throw in stack
        if (!this.checkVisited(neighbours[i][0], neighbours[i][1], visited)) {
          visited.push([neighbours[i][0], neighbours[i][1]]);
          stack.push([neighbours[i][0], neighbours[i][1]]);
        }
      }
    }
    return solved;
  }
}

const arr = [
  [0, 1, 1, 1, 0],
  [0, 1, 1, 1, 0],
  [0, 1, 1, 1, 0],
  [0, 1, 1, 1, 0],
  [0, 1, 1, 1, 0],
];
const maze = new MazeSolver(arr);
console.log("check solvable -> source (0, 1) and Dest (4,3):");
console.log(maze.solve(0, 1, 4, 3));
console.log("check solvable -> source (0, 0) and Dest (4,3):");
console.log(maze.solve(0, 0, 4, 3));
console.log("check solvable -> source (0, 1) and Dest (3,3):");
console.log(maze.solve(0, 1, 3, 3));
console.log("check solvable -> source (0, 1) and Dest (4,4):");
console.log(maze.solve(0, 1, 4, 4));
