// DFS Fundamentals
// Let’s look at a simple problem of searching for a node in a binary tree whose value is equal to the target.

function dfs(root, target) {
  if (!root) return null;
  if (root.val === target) return root;
  // return non-null return value from the recursive calls
  let left = dfs(root.left, target);
  if (left != null) return left;
  let right = dfs(root.right, target);
  // at this point, we know left is null, and right could be null or non-null
  // we return right child's recursive call result directly because
  // - if it's non-null we should return it
  // - if it's null, then both left and right are null, we want to return null
  return right;
}

// Driver code
class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function build_tree(nodes) {
  let val = nodes.next().value;
  if (!val || val === "x") return;
  let cur = new Node(parseInt(val, 10));
  cur.left = build_tree(nodes);
  cur.right = build_tree(nodes);
  return cur;
}

const inputs = [
  "5 4 3 x x 8 x x 6 x x",
  "-100 x -500 x -50 x x",
  "9 8 11 x x 20 x x 6 x x",
];

const target = [8, -50, 11];

// const expected_outputs = [8, -50, 11];

for (let i = 0; i < inputs.length; i++) {
  const arr = inputs[i].split(" ");
  const arrIter = arr[Symbol.iterator]();
  const root = build_tree(arrIter);
  console.log("DFS:", dfs(root, target[i]).val);
}
