// #22
// Given a string containing only the characters '(', ')', '{', '}',
// '[' and ']', return true if the string is valid, false otherwise.
//
// A string is valid if:
// - Every opening bracket has a corresponding closing bracket
// - Brackets are closed in the correct order
//
// Constraints: the string may be empty - return true in that case.
//
// Hint: think about what data structure lets you track the most
// recently opened bracket - when you see a closing bracket, you
// need to check if it matches the last opened one.
//
// Input:  "()"        →  Output: true
// Input:  "()[]{}"   →  Output: true
// Input:  "(]"        →  Output: false
// Input:  "([)]"      →  Output: false
// Input:  "{[]}"      →  Output: true

function isOpener(str)
{
  if(str === "(" || str === "{" || str === "[")
    return true;
  return false;
}

function match(open, close)
{
  if(open === "(" && close === ")" || open === "{" && close === "}" || open === "[" && close === "]")
    return true;
  return false;
}

function isValid(str) {

  const stack = [];
  let left = 0;
  while(left < str.length) //should have use for(const char of str) for clarity
  {
    if(isOpener(str[left]))
      stack.push(str[left])
    else
    {
      const top = stack.pop();
      if(!match(top, str[left]))
        return false;
    }
    left ++;
  }
  return stack.length === 0;
}

// Tests
console.log(isValid("()"));       // → true
console.log(isValid("()[]{}"));   // → true
console.log(isValid("(]"));       // → false
console.log(isValid("([)]"));     // → false
console.log(isValid("{[]}"));     // → true