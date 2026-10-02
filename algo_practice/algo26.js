// #27
// Given an array of integers and a target K, return the total number
// of contiguous subarrays whose sum equals K.
//
// Constraints: the array may contain negative numbers, zeros,
// and positive integers.
// Note: because of negative numbers, a certain technique we learned won't work here!
//
// Input:  [1, 2, 3],       K=3  →  Output: 2  ([1,2] and [3])
// Input:  [1, 1, 1],       K=2  →  Output: 2
// Input:  [1, -1, 1, 1],   K=2  →  Output: 2

function subarraySum(arr, k) {
  let sum = 0;
  let count = 0;

  const prefixSums = new Map();

  // סכום 0 הופיע פעם אחת לפני שהתחלנו
  prefixSums.set(0, 1);

  for (const num of arr) {
    sum += num;

    const needed = sum - k;

    if (prefixSums.has(needed)) {
      count += prefixSums.get(needed);
    }
    prefixSums.set(
      sum,
      (prefixSums.get(sum) || 0) + 1
    );
  }

  return count;
}

// Tests
console.log(subarraySum([1, 2, 3], 3));       // → 2
console.log(subarraySum([1, 1, 1], 2));       // → 2
console.log(subarraySum([1, -1, 1, 1], 2));   // → 2