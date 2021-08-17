class MinHeap {
  constructor(array) {
    this.heap = this.buildHeap(array);
  }

  buildHeap(array) {
    const firstParentIdx = Math.floor((array.length - 2) / 2);
    for (let currentIdx = firstParentIdx; currentIdx >= 0; currentIdx--) {
      this.siftDown(currentIdx, array.length - 1, array);
    }
    return array;
  }

  siftDown(currentIdx, endIdx, heap) {
    let childOneIdx = currentIdx * 2 + 1;
    while (childOneIdx <= endIdx) {
      const childTwoIdx =
        currentIdx * 2 + 2 <= endIdx ? currentIdx * 2 + 2 : -1;
      let idxToSwap;

      if (childTwoIdx !== -1 && heap[childTwoIdx] < heap[childOneIdx]) {
        idxToSwap = childTwoIdx;
      } else {
        idxToSwap = childOneIdx;
      }

      if (heap[idxToSwap] < heap[currentIdx]) {
        this.swap(currentIdx, idxToSwap, heap);
        currentIdx = idxToSwap;
        childOneIdx = currentIdx * 2 + 1;
      } else {
        return;
      }
    }
  }

  swap(i, j, heap) {
    const temp = heap[j];
    heap[j] = heap[i];
    heap[i] = temp;
  }

  peek() {
    return this.heap[0];
  }

  remove() {
    this.swap(0, this.heap.length - 1, this.heap);
    const valueToRemove = this.heap.pop();
    this.siftDown(0, this.heap.length - 1, this.heap);
    return valueToRemove;
  }

  insert(value) {
    this.heap.push(value);
    this.siftUp(this.heap.length - 1, this.heap);
  }

  siftUp(currentIdx, heap) {
    let parentIdx = Math.floor((currentIdx - 1) / 2);
    while (currentIdx > 0 && heap[currentIdx] < heap[parentIdx]) {
      this.swap(currentIdx, parentIdx, heap);
      currentIdx = parentIdx;
      parentIdx = Math.floor((currentIdx - 1) / 2);
    }
  }
}

// driver's code

const isMinHeapPropertySatisfied = (array) => {
  for (let currentIdx = 1; currentIdx < array.length; currentIdx++) {
    const parentIdx = Math.floor((currentIdx - 1) / 2);
    if (array[parentIdx] > array[currentIdx]) return false;
  }
  return true;
};

const minHeap = new MinHeap([
  48, 12, 24, 7, 8, -5, 24, 391, 24, 56, 2, 6, 8, 41,
]);
minHeap.insert(76);
// chai.expect(isMinHeapPropertySatisfied(minHeap.heap)).to.deep.equal(true);
console.log(isMinHeapPropertySatisfied(minHeap.heap));
// chai.expect(minHeap.peek()).to.deep.equal(-5);
console.log(minHeap.peek());
// chai.expect(minHeap.remove()).to.deep.equal(-5);
console.log(minHeap.remove());
// chai.expect(isMinHeapPropertySatisfied(minHeap.heap)).to.deep.equal(true);
console.log(isMinHeapPropertySatisfied(minHeap.heap));
// chai.expect(minHeap.peek()).to.deep.equal(2);
console.log(minHeap.peek());
// chai.expect(minHeap.remove()).to.deep.equal(2);
console.log(minHeap.remove());
// chai.expect(isMinHeapPropertySatisfied(minHeap.heap)).to.deep.equal(true);
console.log(isMinHeapPropertySatisfied(minHeap.heap));
// chai.expect(minHeap.peek()).to.deep.equal(6);
console.log(minHeap.peek());
minHeap.insert(87);
// console.log(minHeap.insert(87));
// chai.expect(isMinHeapPropertySatisfied(minHeap.heap)).to.deep.equal(true);
console.log(isMinHeapPropertySatisfied(minHeap.heap));
