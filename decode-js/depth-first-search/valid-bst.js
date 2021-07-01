// Valid Binary Search Tree

// A binary search tree (BST) is a binary tree with the property that any node’s value is greater
// than or equal to any node in its left subtree and less than or equal to any node’s value in its right subtree.

// Given a binary tree, determine whether it is a binary search tree.
function validBst(root) {
  return dfs(root, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY);
}

function dfs(root, minVal, maxVal) {
  if (!root) return true;
  if (!(minVal <= root.val && root.val <= maxVal)) return false;
  return dfs(root.left, minVal, root.val) && dfs(root.right, root.val, maxVal);
}

class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function buildTree(nodes) {
  let val = nodes.next().value;
  if (!val || val === "x") return;
  let current = new Node(parseInt(val, 10));
  current.left = buildTree(nodes);
  current.right = buildTree(nodes);
  return current;
}

let inputs = [
  "6 4 3 x x 5 x x 8 x x",
  "6 4 3 x x 8 x x 8 x x",
  "1 2 x x 3 x x",
  "x",
  "7 7 7 x x x 7 x 7 x x",
];

for (let i = 0; i < inputs.length; i++) {
  let arr = inputs[i].split(" ");
  let arrItr = arr[Symbol.iterator]();
  let root = buildTree(arrItr);
  console.log("Valid binary search tree : ", validBst(root));
}
