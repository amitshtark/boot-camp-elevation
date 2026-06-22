// #18
// Given an array of positive integers and a target number, return
// the length of the longest contiguous subarray whose sum is less
// than or equal to the target.
//
// Constraints: the array will only contain positive integers.
// Return 0 if no valid subarray exists.
//
// Input:  [1, 2, 3, 4, 5], target 8   →  Output: 3  ([1,2,3] or [2,3,4] - wait, 2+3+4=9, so [1,2,3]=6 or [3,4]=7, longest is [1,2,3] length 3... actually [3,4,5] = 12 no... [1,2,3]=6 ✓ length 3, [2,3]=5 ✓ length 2... longest is [1,2,3] = 3)
// Input:  [3, 1, 2, 1],    target 4   →  Output: 3  ([1,2,1]


function maxLengthSubarray(arr, target) {
  if(target === 0)
    return 0;

  let left = 0;
  let right = 0;
  let sum = 0;
  let maxLength = 0;
  while(right< arr.length)
  {
    sum += arr[right];

    while(sum > target)
    {
      sum -= arr[left];
      left++;
    }
    maxLength = Math.max((right - left + 1), maxLength);
    right++;
  }
  return maxLength;
}

// Tests
console.log(maxLengthSubarray([1, 2, 3, 4, 5], 8)); // → 3
console.log(maxLengthSubarray([3, 1, 2, 1], 4));     // → 3
