// Write a Parentheses Checker function to determine if the input string’s opening
// and closing brackets are properly nested.

function balancedParentheses(str) {
  const stack = [];
  const map = {
    "{": "}",
    "[": "]",
    "(": ")",
  };

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "{" || str[i] === "[" || str[i] === "(") {
      stack.push(str[i]);
    } else {
      let lastElement = stack.pop();
      if (map[lastElement] !== str[i]) return false;
    }
  }
  if (stack.length !== 0) return false;
  return true;
}

console.log(balancedParentheses("{[]()}"));
console.log(balancedParentheses("{[(])}"));
console.log(balancedParentheses("{[}"));
