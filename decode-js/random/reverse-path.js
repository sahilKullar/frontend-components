// We have two identical DOM trees, A and B. For DOM tree A, we have
// the location of an element. Create a function to find that same element
// in tree B.

function reversePath(element, root) {
  const path = [];
  let pointer = element;
  while (pointer.parent) {
    const index = element.parent.children.indexOf(element);
    path.push(index);
    pointer = pointer.parent;
  }

  pointer = root;
  while (path.length) {
    pointer = children[path.pop()];
  }
}
