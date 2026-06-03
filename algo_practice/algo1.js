
//#1
// Given an array of integers, return the largest number in the array.
// You may not use any built-in max functions.
//
// Constraints: the array will always have at least one element.
// Think about what variable you need to track as you loop through.
//
// Hint: start by assuming the first element is the max, then update
// your assumption as you go.
//
arr = [3, 7, 1, 9, 4];
arr2 =   [-5, -1, -8, -3];

function findMax(arr) {
  let max = arr[0];
  arr.forEach(element => {if(element > max) max = element});
  return max;
} 
console.log(findMax(arr2));