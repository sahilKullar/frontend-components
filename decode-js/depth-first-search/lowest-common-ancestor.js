// Lowest Common Ancestor

// The lowest common ancestor (LCA) of two nodes v and w in a tree is the lowest (i.e. deepest) node
// that has both v and w as descendants. We also define each node to be a descendant of itself,
// so if v has a direct connection from w, w is the lowest common ancestor.

// Given two nodes of a binary tree, find their lowest common ancestor.
function lca(root, node1, node2) {
  if (!root) return;
  if (root === node1 || root === node2) return root;
  const left = lca(root.left, node1, node2);
  const right = lca(root.right, node1, node2);
  if (left && right) return root;
  if (left) return left;
  if (right) return right;
  return null;
}

function findNode(root, target) {
  if (!root) return;
  if (root.val === target) return root;
  return findNode(root.left, target) || findNode(root.right, target);
}

function nodeValue(root) {
  if (!root) return null;
  return String(root.val);
}

class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function buildTree(nodes) {
  const val = nodes.next().value;
  if (!val || val === "x") return;
  const current = new Node(parseInt(val, 10));
  current.left = buildTree(nodes);
  current.right = buildTree(nodes);
  return current;
}

const inputs = [
  "6 4 3 x x 5 x x 8 x x",
  "6 4 3 x x 5 x x 8 x x",
  "6 4 3 x x 5 x x 8 x x",
  "x",
];

const inputs1 = [4, 4, 3, 3];
const inputs2 = [8, 6, 5, 2];

for (let i = 0; i < inputs.length; i++) {
  const arr = inputs[i].split(" ");
  const arrIter = arr[Symbol.iterator]();
  const root = buildTree(arrIter);
  const node1 = findNode(root, inputs1[i]);
  const node2 = findNode(root, inputs2[i]);
  const actualOutput = lca(root, node1, node2);
  console.log("Lowest common ancestor : ", nodeValue(actualOutput));
}
