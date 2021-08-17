function longestBalancedSubstring(string) {
  let maxLength = 0;
  let openingCount = 0;
  let closingCount = 0;

  for (let i = 0; i < string.length; i++) {
    if (string[i] === "(") {
      openingCount++;
    } else {
      closingCount++;
    }

    if (openingCount === closingCount) {
      maxLength = Math.max(maxLength, closingCount * 2);
    } else if (closingCount > openingCount) {
      openingCount = 0;
      closingCount = 0;
    }
  }

  openingCount = 0;
  closingCount = 0;

  for (let i = string.length - 1; i >= 0; i--) {
    if (string[i] === "(") {
      openingCount++;
    } else {
      closingCount++;
    }

    if (openingCount === closingCount) {
      maxLength = Math.max(maxLength, closingCount * 2);
    } else if (openingCount > closingCount) {
      openingCount = 0;
      closingCount = 0;
    }
  }
  return maxLength;
}

const string = "(()))(";
const expected = 4;
console.log(longestBalancedSubstring(string));
