// #21
// Given a string and a number K, return the length of the longest
// substring that contains at most K distinct characters.
//
// Constraints: K will always be a positive integer.
// The string will only contain lowercase letters.
//
// Input:  "araaci", K=2  →  Output: 4  ("araa")
// Input:  "araaci", K=1  →  Output: 2  ("aa")
// Input:  "cbbebi", K=3  →  Output: 5  ("cbbeb")

function longestSubstringKDistinct(str, k) {
  let left = 0;
  let max = 0;
  const counts = new Map();

  for(let right=0;right<str.length;right++)
  {
    counts.set(str[right], (counts.get(str[right]) || 0) + 1)

    while(counts.size > k)
    {
      const char = str[left];


      counts.set(char, counts.get(char) - 1);

        if (counts.get(char) === 0)
        {
          counts.delete(char);
        }
        left++;
    }
    max = Math.max(max, right - left + 1);
  }
  return max;
}


// Tests
console.log(longestSubstringKDistinct("araaci", 2)); // → 4
console.log(longestSubstringKDistinct("araaci", 1)); // → 2
console.log(longestSubstringKDistinct("cbbebi", 3)); // → 5