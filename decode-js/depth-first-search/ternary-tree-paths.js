// Combinatorial Search: DFS with States
// Given a ternary tree (each node of the tree has at most three children), find all root-to-leaf paths.

function ternaryTreePaths(root) {
  const res = [];
  if (root) dfs(root, [], res);
  return res;
}

function dfs(root, path, res) {
  if (root.children.every((child) => !child)) {
    path.push(root.val);
    const cur_path = path.join("->");
    res.push(cur_path);
    return;
  }
  for (let child of root.children) {
    if (child) {
      const path_copy = Array.from(path);
      path_copy.push(root.val);
      dfs(child, path_copy, res);
    }
  }
}

class Node {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

function buildTree(nodes) {
  const val = nodes.next().value;
  if (!val || val === "x") return;
  const current = new Node(parseInt(val, 10), []);
  for (let i = 0; i < 3; i++) {
    const n = buildTree(nodes);
    if (n) {
      current.children.push(n);
    }
  }
  return current;
}

const inputs = [
  "1 2 5 x x x x x 3 x x x 4 x x x",
  "1 2 3 x x x 4 x x x 7 x x x 5 x x x 6 x x x",
];

for (let i = 0; i < inputs.length; i++) {
  const arr = inputs[i].split(" ")[Symbol.iterator]();
  const root = buildTree(arr);
  console.log("Ternary tree paths : ", ternaryTreePaths(root));
}
