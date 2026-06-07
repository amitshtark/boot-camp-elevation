// #6
// Given a string of words separated by spaces, return the longest word.
// If there is a tie, return the first one.
//
// Constraints: the string will always have at least one word.
// You may not use any built-in sort functions.
//
str = "the quick brown fox"   // Output: "quick"
str2 = "cat elephant dog"// →  Output: "elephant"
str3 = "one two six ten"  //     →  Output: "one"  (tie → first wins)

function longestWord(str) {
  arr = str.split(" ");
  let max = arr[0].length;
  let longest_word = arr[0];
  for(let i=1;i<arr.length;i++)
  {
    if(arr[i].length > max)
    {
      max = arr[i].length;
      longest_word = arr[i]
    }
  }
  return longest_word;
}
console.log(longestWord(str3));