// This is an input class. Do not edit.
class AncestralTree {
  constructor(name) {
    this.name = name;
    this.ancestor = null;
  }
}

function getYoungestCommonAncestor(topAncestor, descendantOne, descendantTwo) {
  // Write your code here.
  const depthOne = getDescendantDepth(descendantOne, topAncestor);
  const depthTwo = getDescendantDepth(descendantTwo, topAncestor);

  if (depthOne > depthTwo) {
    return backtrackAncestralTree(
      descendantOne,
      descendantTwo,
      depthOne - depthTwo
    );
  } else {
    return backtrackAncestralTree(
      descendantTwo,
      descendantOne,
      depthTwo - depthOne
    );
  }
}

function getDescendantDepth(descendant, topAncestor) {
  let depth = 0;
  while (descendant !== topAncestor) {
    depth++;
    descendant = descendant.ancestor;
  }
  return depth;
}

function backtrackAncestralTree(lowerDescendant, higherDescendant, diff) {
  while (diff > 0) {
    diff--;
    lowerDescendant = lowerDescendant.ancestor;
  }
  while (lowerDescendant !== higherDescendant) {
    lowerDescendant = lowerDescendant.ancestor;
    higherDescendant = higherDescendant.ancestor;
  }
  return lowerDescendant;
}

// Do not edit the lines below.
exports.AncestralTree = AncestralTree;
exports.getYoungestCommonAncestor = getYoungestCommonAncestor;

// driver code
class AncestralTrie extends AncestralTree {
  constructor(name) {
    super(name);
  }

  addAsAncestor(descendants) {
    for (const descendant of descendants) {
      descendant.ancestor = this;
    }
  }
}

function getTrees() {
  const trees = {};
  const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  for (const letter of ALPHABET) {
    trees[letter] = new AncestralTrie(letter);
  }
  return trees;
}

const trees = getTrees();
trees["A"].addAsAncestor([trees["B"], trees["C"]]);
trees["B"].addAsAncestor([trees["D"], trees["E"]]);
trees["D"].addAsAncestor([trees["H"], trees["I"]]);
trees["C"].addAsAncestor([trees["F"], trees["G"]]);

const yca = getYoungestCommonAncestor(trees.A, trees.E, trees.I);
// chai.expect(yca).to.deep.equal(trees.B);
console.log(trees.B);
console.log("*******");
console.log(yca);
