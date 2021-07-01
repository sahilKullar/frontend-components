// Permutations
// Given a list of unique letters, find all of its distinct permutations.
// Input: ['a', 'b', 'c']
// Output: [['a', 'b', 'c'], ['a', 'c', 'b'], ['b', 'a', 'c'], ['b', 'c', 'a'], ['c', 'a', 'b'], ['c', 'b', 'a']]

function permutations(letters) {
  const res = [];
  dfs(letters, [], Array(letters.length).fill(false), res);
  return res;
}

function dfs(letters, path, used, res) {
  if (path.length === letters.length) {
    res.push(Array.from(path));
    return res;
  }

  for (let i = 0; i < letters.length; i++) {
    if (used[i]) continue;
    path.push(letters[i]);
    used[i] = true;
    dfs(letters, path, used, res);
    path.pop();
    used[i] = false;
  }
}

const inputs = ["ab", "abc"];
for (let i = 0; i < inputs.length; i++) {
  console.log("Permutations: ", permutations(inputs[i].split("")));
  // const results = permutations(inputs[i].split(""));
  // for (let [_, res] of Object.entries(results)) {
  //   console.log("Permutations: ", res);
  // }
}
