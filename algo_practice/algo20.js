// #20
// You are given an array of person objects, each with a name, age,
// and budget property. Implement four functions that calculate stats
// across the array.
//
// Constraints: the array may be empty — return 0 in that case.
// Budget and age values will always be positive numbers.
// Some objects may be missing a property — treat it as 0.
//
// Input:
// [
//   { name: "Alice", age: 25, budget: 1000 },
//   { name: "Bob",   age: 30, budget: 500  },
//   { name: "Carol", age: 35, budget: 1500 }
// ]
//
// getBudgetsSum → 3000
// getBudgetsAvg → 1000
// getAgesSum    → 90
// getAgesAvg    → 30

const people = [
  { name: "Alice", age: 25, budget: 1000 },
  { name: "Bob",   age: 30, budget: 500  },
  { name: "Carol", age: 35, budget: 1500 }
];

// implement these four functions
function getBudgetsSum(arr) {
  if(arr.length === 0)
    return 0;
  let sum = 0;
  arr.forEach(element => {
    sum += element.budget;
  });
  return sum;
}

function getBudgetsAvg(arr) {
  if(arr.length === 0)
    return 0;
  let sum = getBudgetsSum(arr);
  return (sum / (arr.length));
}

function getAgesSum(arr) {
  if(arr.length === 0)
    return 0;
  let sum = 0;
  arr.forEach(element => {
    sum += element.age;
  });
  return sum;

}

function getAgesAvg(arr) {
  if(arr.length === 0)
    return 0;
  let sum = getAgesSum(arr);
  return (sum / (arr.length));
}

// Tests
console.log(getBudgetsSum(people)); // → 3000
console.log(getBudgetsAvg(people)); // → 1000
console.log(getAgesSum(people));    // → 90
console.log(getAgesAvg(people));    // → 30