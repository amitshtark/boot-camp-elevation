//#4
//Given an array of integers, return how many numbers
// in the array are strictly greater than the average.
//
// Constraints: the array will always have at least one element.
//
arr = [1, 2, 3, 4, 5]; //  →  Output: 2  (4 and 5 are above average 3)
arr2 = [10, 10, 10, 20]; // →  Output: 1  (only 20 is above average 12.5)
arr3 = [8];

function findAverage(arr){
  let sum = 0;
  for(let i = 0;i<arr.length;i++)
    sum+=arr[i]
  return sum/arr.length;
}


function countAboveAverage(arr) {
  let counter = 0;
  let avg = findAverage(arr);
  for(let i = 0;i<arr.length;i++)
  {
    if(arr[i] > avg)
      counter++;
  }
  return counter;
}
console.log(countAboveAverage(arr3));