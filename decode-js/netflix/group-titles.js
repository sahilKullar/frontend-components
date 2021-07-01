// Implementing the "Group Similar Titles" feature for our "Netflix" project.

function groupTitles(titles) {
  let res = {};
  for (let c of titles) {
    const arr = new Array(26).fill(0);
    for (let b of c) {
      const index = c.charCodeAt(0) - "a".charCodeAt(0);
      arr[index] += 1;
    }
    let key = arr;
    // console.log(key);
    if (key in res) {
      res[key].push(c);
    } else {
      res[key] = [c];
    }
  }

  let results = [];
  for (let key in res) {
    results.push(res[key]);
  }
  return results;
}

let titles = ["duel", "dule", "speed", "spede", "deul", "cars"];
let gt = groupTitles(titles);
let query = "spede";

for (let [_, g] of Object.entries(gt)) {
  if (g.includes(query)) {
    console.log(g);
  }
}
