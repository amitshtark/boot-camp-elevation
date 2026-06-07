let meatArr = ["beef","chicken"]
let vegetableArr = ["rabbit","carrots","potatoes","lettuce"]

meatArr = [...meatArr, vegetableArr[0]]
vegetableArr.shift();

console.log("meat: " + meatArr);
console.log("veg: " + vegetableArr);
