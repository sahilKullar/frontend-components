function reverseWordsInString(string) {
  const words = [];
  let startOfWord = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === " ") {
      words.push(string.slice(startOfWord, i));
      startOfWord = i;
    } else if (string[startOfWord] === " ") {
      words.push(" ");
      startOfWord = i;
    }
  }
  words.push(string.slice(startOfWord));
  reverseList(words);
  return words.join("");
}

function reverseList(words) {
  let start = 0;
  let end = words.length - 1;
  while (start < end) {
    const temp = words[start];
    words[start] = words[end];
    words[end] = temp;
    start++;
    end--;
  }
}

const input = "AlgoExpert is the best!";
const expected = "best! the is AlgoExpert";
console.log(reverseWordsInString(input));
