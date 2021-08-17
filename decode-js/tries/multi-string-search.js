function multiStringSearch(bigString, smallStrings) {
  const trie = new Trie();
  for (const string of smallStrings) {
    trie.insert(string);
  }
  const containedStrings = {};
  for (let i = 0; i < bigString.length; i++) {
    findSmallStringsIn(bigString, i, trie, containedStrings);
  }
  return smallStrings.map((string) => string in containedStrings);
}

function findSmallStringsIn(bigString, startIdx, trie, containedStrings) {
  let node = trie.root;
  for (let i = startIdx; i < bigString.length; i++) {
    const letter = bigString[i];
    if (!(letter in node)) break;
    node = node[letter];
    if (trie.endSymbol in node) containedStrings[node[trie.endSymbol]] = true;
  }
}

class Trie {
  constructor() {
    this.root = {};
    this.endSymbol = "*";
  }

  insert(string) {
    let node = this.root;
    for (let i = 0; i < string.length; i++) {
      const letter = string[i];
      if (!(letter in node)) node[letter] = {};
      node = node[letter];
    }
    node[this.endSymbol] = string;
  }
}

console.log(
  multiStringSearch("this is a big string", [
    "this",
    "yo",
    "is",
    "a",
    "bigger",
    "string",
    "kappa",
  ])
);
