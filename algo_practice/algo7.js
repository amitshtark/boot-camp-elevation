// #7 
// Given two strings, return true if they are anagrams of each other,
// false otherwise. An anagram uses the same characters the same number
// of times, just in a different order.
//
// Constraints: strings will only contain lowercase letters, no spaces.
//
let a = "listen";
let b = "silent";//  →  Output: true

let a2 = "hello";
let b2 = "world"; // →  Output: false


let a3 = "cat"
let b3 = "car"  //   →  Output: false

function isAnagram(a, b) {
  if(a.length !== b.length)
    return false;
  let lettersA = new Map();
  for(let i=0; i<a.length;i++)
  {
    const letter = a[i];
    lettersA.set(letter, (lettersA.get(letter) || 0) + 1)
  };
  for(let i=0; i<b.length;i++)
  {
    const letter = b[i];
    if(lettersA.get(letter))
    {
      lettersA.set(letter, lettersA.get(letter) - 1)
    }
    else
    {
      return false;
    }
  }
  return [...lettersA.values()].every(value => value === 0);;
}
console.log(isAnagram(a, b));