// Visible Tree Node

// In a binary tree, a node is considered “visible” if no node on the root-to-itself path has a greater value.
// The root is always “visible” since there are no other nodes between the root and itself.
// Given a binary tree, count the number of “visible” nodes.

// The time complexity is O(N) since each node is visited once.

function visibleTreeNode(root) {
  return dfs(root, Number.NEGATIVE_INFINITY);
}

function dfs(root, maxSoFar) {
  if (!root) return 0;
  let total = 0;
  if (root.val >= maxSoFar) total++;

  total += dfs(root.left, Math.max(maxSoFar, root.val));
  total += dfs(root.right, Math.max(maxSoFar, root.val));
  return total;
}

class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.right = right;
    this.left = left;
  }
}
function buildTree(nodes) {
  const val = nodes.next().value;
  if (!val || val === "x") return;
  let current = new Node(parseInt(val, 10));
  current.left = buildTree(nodes);
  current.right = buildTree(nodes);
  return current;
}

let inputs = [
  "5 4 3 x x 8 x x 6 x x",
  "-100 x -500 x -50 x x",
  "9 8 11 x x 20 x x 6 x x",
];

for (let i = 0; i < inputs.length; i++) {
  let arr = inputs[i].split(" ");
  let arrItr = arr[Symbol.iterator]();
  const root = buildTree(arrItr);
  console.log("Visible tree node : ", visibleTreeNode(root));
}
