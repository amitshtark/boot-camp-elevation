// #17
// Given a string and a number K, return the maximum number of vowels
// in any substring of length K.
// Vowels are: a, e, i, o, u (lowercase only).
//
// Constraints: K will always be less than or equal to the string length.
// The string will only contain lowercase letters.
// You may not use any built-in methods to count vowels.
//
// Hint: count vowels in the first K characters as your starting window.
// As the window slides forward, what character leaves and what enters?
//
// Input:  "abciiidef", K=3  →  Output: 3  ("iii")
// Input:  "aeiou",     K=2  →  Output: 2  ("ae", "ei", "io", "ou" all have 2)
// Input:  "leetcode",  K=3  →  Output: 2  ("lee", "eet", "ode")

function isVowel(char)
{
  if(char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u')
    return true;
  return false;
}


function maxVowels(str, k) {
  if(k === 0)
    return 0;

  let left = 0;
  let right = k-1;
  let count = 0;
  for(let i = left; i<= right; i++)
  {
    if(isVowel(str[i]))
      count++;
  }
  let max = count;
  while(right+1 < str.length)
  {
    if(isVowel(str[left]))
      count--;
    if(isVowel(str[right+1]))
      count++;
    if(count > max)
      max = count;

    left++;
    right++;
  }
  return max;
}

// Tests
console.log(maxVowels("abciiidef", 3)); // → 3
console.log(maxVowels("aeiou", 2));     // → 2
console.log(maxVowels("leetcode", 3));  // → 2