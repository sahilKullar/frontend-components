// Serializing and Deserializing Binary Tree

// Given a binary tree, write a serialize function that converts the tree into a string,
// and a deserialize function that converts a string to a binary tree. You may serialize
// the tree into any string representation you want as long as it can be deserialized.

function serialize(root) {
  let res = [];
  serialize_dfs(root, res);
  return res.join(" ");
}

function serialize_dfs(root, res) {
  if (!root) {
    res.push("x");
    return;
  }
  res.push(root.val);
  serialize_dfs(root.left, res);
  serialize_dfs(root.right, res);
}

function deserialize(s) {
  return deserialize_dfs(s.split(" ")[Symbol.iterator]());
}

function deserialize_dfs(nodes) {
  let val = nodes.next().value;
  if (val === "x") return;
  let current = new Node(parseInt(val, 10));
  current.left = deserialize_dfs(nodes);
  current.right = deserialize_dfs(nodes);
  return current;
}

function getTree(root, arr) {
  if (!root) {
    arr.push("x");
  } else {
    arr.push(root.val);
    getTree(root.left, arr);
    getTree(root.right, arr);
  }
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
  "1 2 x x 3 x x",
  "10 86 x x 100 x x",
  "x",
];

for (let i = 0; i < inputs.length; i++) {
  let arr = inputs[i].split(" ");
  let arrIter = arr[Symbol.iterator]();
  let root = buildTree(arrIter);
  let actualOutput = deserialize(serialize(root));
  let array = [];
  getTree(actualOutput, array);
  console.log("Serializing and deserializing :", array.join(" "));
}
