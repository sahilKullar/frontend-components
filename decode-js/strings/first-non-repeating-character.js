function firstNonRepeatingCharacter(string) {
  const characterCount = {};
  for (const character of string) {
    if (!(character in characterCount)) characterCount[character] = 0;
    characterCount[character]++;
  }
  for (let i = 0; i < string.length; i++) {
    const character = string[i];
    if (characterCount[character] === 1) return i;
  }
  return -1;
}

console.log(firstNonRepeatingCharacter("abc"));
