// The Max Depth of Binary Tree

// The max depth of a binary tree is the longest root-to-leaf path. Given a binary tree, find its max depth

// The time complexity is O(N) since each node is visited once.\

class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function maxDepth(root) {
  if (!root) return 0;
  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
}

function buildTree(nodes) {
  let val = nodes.next().value;
  if (!val || val === "x") return;
  let current = new Node(parseInt(val, 10));
  current.left = buildTree(nodes);
  current.right = buildTree(nodes);
  return current;
}

let inputs = ["5 4 3 x x 8 x x 6 x x", "1 x x", "x", "6 x 9 x 11 x 7 x x"];

for (let i = 0; i < inputs.length; i++) {
  let arr = inputs[i].split(" ");
  let arrItr = arr[Symbol.iterator]();
  const root = buildTree(arrItr);
  console.log("Get max depth", maxDepth(root));
}
