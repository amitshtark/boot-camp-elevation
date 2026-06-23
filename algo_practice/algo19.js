// #19
// Given a string, return the first character that appears only once.
// If no such character exists, return null.
//
// Constraints: the string will only contain lowercase letters.
// The string will always have at least one character.
//
// Input:  "leetcode"   →  Output: "l"
// Input:  "aabb"       →  Output: null
// Input:  "aabbc"      →  Output: "c"

function firstNonRepeating(str) {
  let counts = {};

  for (let i = 0; i < str.length; i++) {
    let letter = str[i];
    counts[letter] = (counts[letter] || 0) + 1;
  }
  for (let i = 0; i < str.length; i++) {
    let letter = str[i];
    if(counts[letter] === 1)
      return letter;
  }
  return null;
}

// Tests
console.log(firstNonRepeating("leetcode")); // → "l"
console.log(firstNonRepeating("aabb"));     // → null
console.log(firstNonRepeating("aabbc"));    // → "c"