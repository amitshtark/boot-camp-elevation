
//#3
// Given a string, return the number of vowels (a, e, i, o, u) it contains.
// Treat uppercase and lowercase the same.
//
// Constraints: input may contain spaces and mixed case. Vowels are only a e i o u.
//
// Hint: a string of vowels makes the membership check clean —
// check if each character is inside it.
//
str = "hello world" //Output: 3
str2 = "Algorithm" //Output: 3
function isVowel(char)
{
  if(char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u')
    return true;
  return false;
}

function countVowels(str) {
  let counter = 0;
  str = str.toLowerCase();
  for(let i =0;i<=str.length;i++)
  {
    if(isVowel(str[i]))
      counter++;
  }
  return counter
}
console.log(countVowels(str));