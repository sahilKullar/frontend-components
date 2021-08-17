class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function findNodesDistanceK(tree, target, k) {
  const nodesDistanceK = [];
  findDistanceFromNodeToTarget(tree, target, k, nodesDistanceK);
  return nodesDistanceK;
}

function findDistanceFromNodeToTarget(node, target, k, nodesDistanceK) {
  if (node === null) return -1;
  if (node.value === target) {
    addSubtreeNodeAtDistanceK(node, 0, k, nodesDistanceK);
    return 1;
  }

  const leftDistance = findDistanceFromNodeToTarget(
    node.left,
    target,
    k,
    nodesDistanceK
  );

  const rightDistance = findDistanceFromNodeToTarget(
    node.right,
    target,
    k,
    nodesDistanceK
  );

  if (leftDistance === k || rightDistance === k)
    nodesDistanceK.push(node.value);

  if (leftDistance !== -1) {
    addSubtreeNodeAtDistanceK(node.right, leftDistance + 1, k, nodesDistanceK);
    return leftDistance + 1;
  }

  if (rightDistance !== -1) {
    addSubtreeNodeAtDistanceK(node.left, rightDistance + 1, k, nodesDistanceK);
    return rightDistance + 1;
  }

  return -1;
}

function addSubtreeNodeAtDistanceK(node, distance, k, nodesDistanceK) {
  if (node === null) return;
  if (distance === k) {
    nodesDistanceK.push(node.value);
  } else {
    addSubtreeNodeAtDistanceK(node.left, distance + 1, k, nodesDistanceK);
    addSubtreeNodeAtDistanceK(node.right, distance + 1, k, nodesDistanceK);
  }
}

const root = new BinaryTree(1);
root.left = new BinaryTree(2);
root.right = new BinaryTree(3);
root.left.left = new BinaryTree(4);
root.left.right = new BinaryTree(5);
root.right.right = new BinaryTree(6);
root.right.right.left = new BinaryTree(7);
root.right.right.right = new BinaryTree(8);
const target = 3;
const k = 2;
const expected = [2, 7, 8];
const actual = findNodesDistanceK(root, target, k);
console.log(actual);
// actual.sort();
// chai.expect(actual).to.deep.equal(expected);
