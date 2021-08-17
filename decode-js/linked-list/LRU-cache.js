class LRUCache {
  constructor(maxSize) {
    this.cache = {};
    this.listOfMostRecent = new DoublyLinkedList();
    this.currentSize = 0;
    this.maxSize = maxSize || 0;
  }

  insertKeyValuePair(key, value) {
    if (!(key in this.cache)) {
      if (this.currentSize === this.maxSize) {
        this.evictLeastRecent();
      } else {
        this.currentSize++;
      }
      this.cache[key] = new DoublyLinkedListNode(key, value);
    } else {
      this.replaceKey(key, value);
    }
    this.updateMostRecent(this.cache[key]);
  }

  getMostRecentKey() {
    if (!this.listOfMostRecent.head) return;
    return this.listOfMostRecent.head.key;
  }

  getValueFromKey(key) {
    if (!(key in this.cache)) return null;
    this.updateMostRecent(this.cache[key]);
    return this.cache[key].value;
  }

  evictLeastRecent() {
    const keyToRemove = this.listOfMostRecent.tail.key;
    this.listOfMostRecent.removeTail();
    delete this.cache[keyToRemove];
  }

  replaceKey(key, value) {
    if (!(key in this.cache)) {
      throw new Error("The provided key isn't in the cache!");
    }
    this.cache[key].value = value;
  }

  updateMostRecent(node) {
    this.listOfMostRecent.setHead(node);
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  setHead(node) {
    if (this.head === null) {
      this.head = node;
      this.tail = node;
      return;
    }
    this.insertBefore(this.head, node);
  }

  insertBefore(node, nodeToInsert) {
    if (nodeToInsert === this.head && nodeToInsert === this.tail) return;
    this.remove(nodeToInsert);
    nodeToInsert.prev = node.prev;
    nodeToInsert.next = node;
    if (node.prev == null) {
      this.head = nodeToInsert;
    } else {
      node.prev.next = nodeToInsert;
    }
    node.prev = nodeToInsert;
  }

  remove(node) {
    if (node === this.head) this.head = this.head.next;
    if (node === this.tail) this.tail = this.tail.prev;
    this.removeNodeBindings(node);
  }

  removeNodeBindings(node) {
    if (node.prev !== null) node.prev.next = node.next;
    if (node.next !== null) node.next.prev = node.prev;
    node.prev = null;
    node.next = null;
  }

  removeTail() {
    if (this.tail === null) return;
    if (this.tail === this.head) {
      this.head = null;
      this.tail = null;
      return;
    }
    this.tail = this.tail.prev;
    this.tail.next = null;
  }
}

class DoublyLinkedListNode {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

const lruCache = new LRUCache(3);
lruCache.insertKeyValuePair("b", 2);
lruCache.insertKeyValuePair("a", 1);
lruCache.insertKeyValuePair("c", 3);
// chai.expect(lruCache.getMostRecentKey()).to.deep.equal('c');
console.log(lruCache.getMostRecentKey());
// chai.expect(lruCache.getValueFromKey('a')).to.deep.equal(1);
console.log(lruCache.getValueFromKey("a"));
// chai.expect(lruCache.getMostRecentKey()).to.deep.equal("a");
console.log(lruCache.getMostRecentKey());
lruCache.insertKeyValuePair("d", 4);
// chai.expect(lruCache.getValueFromKey("b")).to.deep.equal(null);
console.log(lruCache.getValueFromKey("b"));
lruCache.insertKeyValuePair("a", 5);
// chai.expect(lruCache.getValueFromKey("a")).to.deep.equal(5);
console.log(lruCache.getValueFromKey("a"));
