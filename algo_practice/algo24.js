// #25
// Given a SORTED array of integers and a target number, return the
// index of the target if it exists, or -1 if it doesn't.
//
// Constraints: the array is sorted in ascending order.
// You may not use any built-in search functions.
//
// Input:  [1, 3, 5, 7, 9], target 5   →  Output: 2
// Input:  [1, 3, 5, 7, 9], target 6   →  Output: -1
// Input:  [1, 3, 5, 7, 9], target 1   →  Output: 0
// Input:  [1, 3, 5, 7, 9], target 9   →  Output: 4

function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  while(left <= right)
  {
    let half = Math.floor((left + right) / 2);
    if(arr[half] > target)
    {
      right = half-1;
    }
    else if(arr[half] < target)
    {
      left = half+1;
    }
    else 
      return half;
  }
  return -1;
}

// Tests
console.log(binarySearch([1, 3, 5, 7, 9], 5));  // → 2
console.log(binarySearch([1, 3, 5, 7, 9], 6));  // → -1
console.log(binarySearch([1, 3, 5, 7, 9], 1));  // → 0
console.log(binarySearch([1, 3, 5, 7, 9], 9));  // → 4