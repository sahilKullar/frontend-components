// Phone Number Letter Permutations
// Given a phone number that contains digits from 2–9, find all possible letter combinations the phone number could translate to.
// Input: "56"
// Output:["jm","jn","jo","km","kn","ko","lm","ln","lo"]

function letterCombinationsOfPhoneNumber(digits) {
  let res = [];
  dfs(digits, [], res);
  return res;
}

function dfs(digits, path, res) {
  if (path.length === digits.length) {
    res.push(path.join(""));
    return;
  }
  const nextNumber = digits.charAt(path.length);
  for (let letter of KEYBOARD[nextNumber]) {
    path.push(letter);
    dfs(digits, path, res);
    path.pop();
  }
}

const KEYBOARD = {
  2: "abc",
  3: "def",
  4: "ghi",
  5: "jkl",
  6: "mno",
  7: "pqrs",
  8: "tuv",
  9: "wxyz",
};

const inputs = ["56", "23", "235"];
for (let i = 0; i < inputs.length; i++) {
  console.log(
    "Letter combinations of phone number : ",
    letterCombinationsOfPhoneNumber(inputs[i])
  );
}
