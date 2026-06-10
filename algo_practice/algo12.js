// #13
// Given a string, return the length of the longest substring
// that contains no repeating characters.
//
// Constraints: the string may contain letters, digits, and spaces.
// An empty string should return 0.
//
// Input:  "abcabcbb"  →  Output: 3  ("abc")
// Input:  "bbbbb"     →  Output: 1  ("b")
// Input:  "pwwkew"    →  Output: 3  ("wke")
// Input:  ""          →  Output: 0

function lengthOfLongestSubstring(str) {
  let set = new Set();
  let max = 0;
  let length = 0;
  let left = 0;
  for(let right=0; right<str.length; right++)
  {
    if(!set.has(str[right]))
    {
      max = Math.max(max, right - left + 1);
    }
    else
    {
      while(set.has(str[right]))
      {
        set.delete(str[left]);
        left++;
      }
    }
    set.add(str[right]);

  }
  return max;
}

// Tests
console.log(lengthOfLongestSubstring("abcabcbb")); // → 3
console.log(lengthOfLongestSubstring("bbbbb"));    // → 1
console.log(lengthOfLongestSubstring("pwwkew"));   // → 3
console.log(lengthOfLongestSubstring(""));         // → 0
console.log(lengthOfLongestSubstring("bcbf"));     // → 3
console.log(lengthOfLongestSubstring("abcdefc"));     // → 4