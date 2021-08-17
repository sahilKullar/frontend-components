class BST {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

class TreeInfo {
  constructor(rootIdx) {
    this.rootIdx = rootIdx;
  }
}

function reconstructBst(preOrderTraversalValues) {
  const treeInfo = new TreeInfo(0);
  return reconstructBstFromRange(
    -Infinity,
    Infinity,
    preOrderTraversalValues,
    treeInfo
  );
}

function reconstructBstFromRange(
  lowerBound,
  upperBound,
  preOrderTraversalValues,
  currentSubtreeInfo
) {
  if (currentSubtreeInfo.rootIdx === preOrderTraversalValues.length)
    return null;

  const rootValue = preOrderTraversalValues[currentSubtreeInfo.rootIdx];
  if (rootValue < lowerBound || rootValue >= upperBound) return null;

  currentSubtreeInfo.rootIdx++;
  const leftSubtree = reconstructBstFromRange(
    lowerBound,
    rootValue,
    preOrderTraversalValues,
    currentSubtreeInfo
  );
  const rightSubtree = reconstructBstFromRange(
    rootValue,
    upperBound,
    preOrderTraversalValues,
    currentSubtreeInfo
  );
  return new BST(rootValue, leftSubtree, rightSubtree);
}

// driver's code

function getDfsOrder(node, values) {
  if (node === null) return;
  values.push(node.value);
  getDfsOrder(node.left, values);
  getDfsOrder(node.right, values);
  return values;
}

const preOrderTraversalValues = [10, 4, 2, 1, 3, 17, 19, 18];
const tree = new BST(10);
tree.left = new BST(4);
tree.left.left = new BST(2);
tree.left.left.left = new BST(1);
tree.left.right = new BST(3);
tree.right = new BST(17);
tree.right.right = new BST(19);
tree.right.right.left = new BST(18);
const expected = getDfsOrder(tree, []);
const actual = reconstructBst(preOrderTraversalValues);
const actualDfsOrder = getDfsOrder(actual, []);
console.log(actualDfsOrder);
console.log(expected);
// chai.expect(actualDfsOrder).to.deep.equal(expected);
