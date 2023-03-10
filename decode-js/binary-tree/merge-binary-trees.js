function mergeBinaryTrees(tree1, tree2) {
  if (tree1 === null) return tree2;
  if (tree2 === null) return tree1;
  tree1.value += tree2.value;
  tree1.left = mergeBinaryTrees(tree1.left, tree2.left);
  tree1.right = mergeBinaryTrees(tree1.right, tree2.right);
  return tree1;
}

class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const tree1 = new BinaryTree(1);
tree1.left = new BinaryTree(3);
tree1.left.left = new BinaryTree(7);
tree1.left.right = new BinaryTree(4);
tree1.right = new BinaryTree(2);

const tree2 = new BinaryTree(1);
tree2.left = new BinaryTree(5);
tree2.left.left = new BinaryTree(2);
tree2.right = new BinaryTree(9);
tree2.right.left = new BinaryTree(7);
tree2.right.right = new BinaryTree(6);

console.log(mergeBinaryTrees(tree1, tree2));
