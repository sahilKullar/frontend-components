function removeDuplicateString(string) {
  const array = string.split(" ");
  const set = new Set(array);
  return [...set].join(" ");
}

console.log(removeDuplicateString("My name is is name Sahil"));
