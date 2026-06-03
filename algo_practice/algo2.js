//#2
// Given a string, return it reversed.
// You may not use any built-in reverse functions.
//
// Constraints: the string will only contain lowercase letters.
// Think about iterating from the end toward the beginning.
//
// Hint: you can build a new string character by character by iterating backwards.
//
str = "hello";
str2 = "algorithm";
str3 = "";

function reverseString(str) {
  let newStr = "";
  if (str === "") return "";
  for(let i = (str.length)-1; i >= 0; i--)

  {
    newStr += str[i];
  }
  return newStr;
}
console.log(reverseString(str2));