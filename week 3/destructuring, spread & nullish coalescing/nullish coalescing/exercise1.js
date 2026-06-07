let employeesArr = [
  { name : "Joey" , id: 1 , age: 26},
  { name : "Lily" , id: null , age: 24},
  { name : "Alice" , id: 7 , age: null},
  { name : "Sam" , id: 8 , age: 24},
  { name : "Ray" , id: null , age: null}
  ]

const bad_employees = [];
employeesArr.forEach(element => {
let id = element.id ?? "missing";
let age = element.age ?? "missing";
if(age === "missing" || id === "missing")
bad_employees.push(element.name);
});
console.log(bad_employees);