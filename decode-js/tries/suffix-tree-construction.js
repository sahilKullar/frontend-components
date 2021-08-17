class SuffixTrie {
  constructor(string) {
    this.root = {};
    this.endSymbol = "*";
    this.populateSuffixTreeFrom(string);
  }

  populateSuffixTreeFrom(string) {
    for (let i = 0; i < string.length; i++) {
      this.insertSubstringStartingAt(i, string);
    }
  }

  insertSubstringStartingAt(i, string) {
    let node = this.root;
    for (let j = i; j < string.length; j++) {
      const letter = string[j];
      if (!(letter in node)) node[letter] = {};
      node = node[letter];
    }
    node[this.endSymbol] = true;
  }

  contains(string) {
    let node = this.root;
    for (const letter of string) {
      if (!(letter in node)) return false;
      node = node[letter];
    }
    return this.endSymbol in node;
  }
}

const trie = new SuffixTrie("babc");
const expected = {
  c: { "*": true },
  b: {
    c: { "*": true },
    a: { b: { c: { "*": true } } },
  },
  a: { b: { c: { "*": true } } },
};
console.log(trie.root);
console.log(trie.contains("abc"));
