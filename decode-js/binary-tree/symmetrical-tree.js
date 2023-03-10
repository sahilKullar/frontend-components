function symmetricalTree(tree) {
  return treesAreMirrored(tree.left, tree.right);
}

function treesAreMirrored(left, right) {
  if (left !== null && right !== null && left.value === right.value) {
    return (
      treesAreMirrored(left.left, right.right) &&
      treesAreMirrored(left.right, right.left)
    );
  }
  return left === right;
}

class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const tree = new BinaryTree(6);
tree.left = new BinaryTree(5);
tree.right = new BinaryTree(5);
tree.left.left = new BinaryTree(7);
tree.left.right = new BinaryTree(9);
tree.right.left = new BinaryTree(9);
tree.right.right = new BinaryTree(7);
console.log(symmetricalTree(tree));
