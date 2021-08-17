function maxPathSum(tree) {
  const [_, maxSum] = findMaxSum(tree);
  return maxSum;
}

function findMaxSum(tree) {
  if (tree === null) return [0, -Infinity];

  const [leftMaxSumAsBranch, leftMaxPathSum] = findMaxSum(tree.left);
  const [rightMaxSumAsBranch, rightMaxPathSum] = findMaxSum(tree.right);
  const maxChildSumAsBranch = Math.max(leftMaxSumAsBranch, rightMaxSumAsBranch);

  const { value } = tree;
  const maxSumAsBranch = Math.max(maxChildSumAsBranch + value, value);
  const maxSumAsRootNode = Math.max(
    leftMaxSumAsBranch + value + rightMaxSumAsBranch,
    maxSumAsBranch
  );
  const maxPathSum = Math.max(
    leftMaxPathSum,
    rightMaxPathSum,
    maxSumAsRootNode
  );
  return [maxSumAsBranch, maxPathSum];
}

class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(values, i = 0) {
    if (i >= values.length) return;
    const queue = [this];
    while (queue.length > 0) {
      let current = queue.shift();
      if (current.left === null) {
        current.left = new BinaryTree(values[i]);
        break;
      }
      queue.push(current.left);
      if (current.right === null) {
        current.right = new BinaryTree(values[i]);
        break;
      }
      queue.push(current.right);
    }
    this.insert(values, i + 1);
    return this;
  }
}

const test = new BinaryTree(1).insert([2, 3, 4, 5, 6, 7]);
console.log(maxPathSum(test));
