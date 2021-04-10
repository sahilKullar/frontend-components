// Use function composition or recursion to solve this problem.

// using recursion
function getPascalsLine(x) {
  if (x === 0) {
    // Basecase # 1
    // top element of pyramid has only one value
    // the value [1]
    return [1];
  } else {
    // recursive case
    // It will have atleast two 1's
    let line = [1]; // start by adding first 1 in initialisation
    let previousLine = getPascalsLine(x - 1); // get previous line
    // Traverse previous line two values at a time
    // Ignore the last value as we need some of adjacent pairs
    // so loop runs for i less than previousLine.length - 1
    for (let i = 0; i < previousLine.length - 1; i++) {
      // add sum of i and i+1 index and push to line array
      line.push(previousLine[i] + previousLine[i + 1]);
    }
    // finally push the ending [1]
    line.push(1);
    // return the final line
    return line;
  }
}

console.log("5th line is: ", getPascalsLine(1));

// using function composition

const compose = (...fns) => (x) => fns.reduceRight((y, f) => f(y), x);

function getPascalsLines(x) {
  function createNextLine(previousLine) {
    let line = [1]; // initialise by 1 in start
    for (let i = 0; i < previousLine.length - 1; i++) {
      // add sum of i and i+1 index and push to line array
      line.push(previousLine[i] + previousLine[i + 1]);
    }
    line.push(1); // add ending 1 value
    return line; // return line
  }
  let firstLine = [1]; // index 0
  let functions = []; // empty array of functions
  // The line number means that many amount of composed functions
  // for line x, x-1 number of composed functions
  for (let i = 0; i < x; i++) {
    functions.push(createNextLine);
  }
  // in compose we need to pass each function as argument
  // to spread the array of functions, use '...' operator
  let answer = compose(...functions)(firstLine);
  // final answer returned
  return answer;
}

console.log("5th line is: ", getPascalsLines(5));
