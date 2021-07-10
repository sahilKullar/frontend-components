function heightBalancedBinaryTree(tree) {
  const treeInfo = getTreeInfo(tree);
  return treeInfo.isBalanced;
}

function getTreeInfo(node) {
  if (node === null) return new TreeInfo(true, -1);
  const leftSubtree = getTreeInfo(node.left);
  const rightSubtree = getTreeInfo(node.right);
  const isBalanced =
    leftSubtree.isBalanced &&
    rightSubtree.isBalanced &&
    Math.abs(leftSubtree.height - rightSubtree.height) <= 1;
  const height = 1 + Math.max(leftSubtree.height, rightSubtree.height);
  return new TreeInfo(isBalanced, height);
}

class TreeInfo {
  constructor(isBalanced, height) {
    this.isBalanced = isBalanced;
    this.height = height;
  }
}

class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const root = new BinaryTree(1);
root.left = new BinaryTree(2);
root.right = new BinaryTree(3);
root.left.left = new BinaryTree(4);
root.left.right = new BinaryTree(5);
root.right.right = new BinaryTree(6);
root.left.right.left = new BinaryTree(7);
root.left.right.right = new BinaryTree(8);
// const expected = true;
console.log(heightBalancedBinaryTree(root));
