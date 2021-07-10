class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
function findKthLargestValueInBst(tree, k) {
  const sortedValues = [];
  inOrderTraverse(tree, sortedValues);
  return sortedValues[sortedValues.length - k];
}

function inOrderTraverse(tree, sortedValues) {
  if (tree === null) return;
  inOrderTraverse(tree.left, sortedValues);
  sortedValues.push(tree.value);
  inOrderTraverse(tree.right, sortedValues);
}

const root = new BST(15);
root.left = new BST(5);
root.left.left = new BST(2);
root.left.left.left = new BST(1);
root.left.left.right = new BST(3);
root.left.right = new BST(5);
root.right = new BST(20);
root.right.left = new BST(17);
root.right.right = new BST(22);
const k = 3;
console.log(findKthLargestValueInBst(root, k));
