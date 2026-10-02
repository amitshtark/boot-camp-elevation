// #26
// Given a sorted array of integers (may include negative numbers),
// return a new array of the squares of each number, sorted in
// ascending order.
//
// Constraints: do not use any built-in sort functions.
// The input array is sorted in ascending order.
//
// Input:  [-4, -1, 0, 3, 10]  →  Output: [0, 1, 9, 16, 100]
// Input:  [-7, -3, 2, 3, 11]  →  Output: [4, 9, 9, 49, 121]
// Input:  [0, 1, 2, 3]        →  Output: [0, 1, 4, 9]

function sortedSquares(arr) {
  let newArr = [];
  let pos = arr.length - 1;
  let left = 0;
  let right = pos;

  while (pos >=0)
  {
    let sqrLeft = arr[left] ** 2;
    let sqrRight = arr[right] ** 2;
    if(sqrLeft > sqrRight)
    {
      newArr[pos] = sqrLeft;
      left++;
    }
    else
    {
      newArr[pos] = sqrRight
      right--; 
    }
    pos--;
  }
  return newArr;
}

// Tests
console.log(sortedSquares([-4, -1, 0, 3, 10])); // → [0, 1, 9, 16, 100]
console.log(sortedSquares([-7, -3, 2, 3, 11])); // → [4, 9, 9, 49, 121]
console.log(sortedSquares([0, 1, 2, 3]));        // → [0, 1, 4, 9]