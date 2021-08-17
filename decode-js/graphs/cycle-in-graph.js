function cycleInGraph(edges) {
  const numberOfNodes = edges.length;
  const visited = new Array(numberOfNodes).fill(false);
  const currentlyInStack = new Array(numberOfNodes).fill(false);
  for (let node = 0; node < numberOfNodes; node++) {
    if (visited[node]) continue;
    const containsCycle = isNodeInCycle(node, edges, visited, currentlyInStack);
    if (containsCycle) return true;
  }
  return false;
}

function isNodeInCycle(node, edges, visited, currentlyInStack) {
  visited[node] = true;
  currentlyInStack[node] = true;
  const neighbors = edges[node];
  for (let neighbor of neighbors) {
    if (!visited[neighbor]) {
      const containsCycle = isNodeInCycle(
        neighbor,
        edges,
        visited,
        currentlyInStack
      );
      if (containsCycle) return true;
    } else if (currentlyInStack[neighbor]) {
      return true;
    }
  }
  currentlyInStack[node] = false;
  return false;
}

const edges = [[1, 3], [2, 3, 4], [0], [], [2, 5], []];
const expected = true;
console.log(cycleInGraph(edges));
