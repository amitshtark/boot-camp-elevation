/*
  Write your code in the corresponding method
  Please note: You must also add the correct arguments to the methods
*/

//Exercise 1
const findFactorial = function(num) {
  if(num === 0 || num === 1) return 1;
  return num * findFactorial(num-1);
}

//Exercise 2
const reverseString = function(oldStr, newStr="") {
  if(oldStr === "") return newStr;
  let length = oldStr.length;
  let last = oldStr[length-1];
  return reverseString(oldStr.slice(0, length-1), newStr + last);

}

//Exercise 3
const arr1 = [1, 2, 3]
const arr2 = []

const swap = function(arr1, arr2) {
  if(arr1.length === 0) return arr2;
  arr2.push(arr1.splice(0, 1)[0]);
  return(swap(arr1, arr2));

}

swap(arr1, arr2)
console.log(arr1) //[]
console.log(arr2) //[1, 2, 3]


/* DO NOT REMOVE THE EXPORTS BELOW */
module.exports = { findFactorial, reverseString, swap }