function removeFromArray(arr, item) {
  const index = arr.indexOf(item);
  return [...arr.slice(0, index), ...arr.slice(index + 1)];
}

const books = ["practical vim", "moby dick", "the dark tower"];
const recent = removeFromArray(books, "moby dick");
console.log("Recent books: " + recent);
const novels = removeFromArray(books, "practical vim");
console.log("Novels: " + novels);
