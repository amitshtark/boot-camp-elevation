const first = process.argv[2];
const operator = process.argv[3];
const second = process.argv[4];

const num1 = Number(first);
const num2 = Number(second);
if(isNaN(num1) || isNaN(num2))
{
  console.log("please enter valid numbers");
}
else{
  let result;

  if (operator === "+") {
    result = num1 + num2;
  } else if (operator === "-") {
    result = num1 - num2;
  } else if (operator === "*") {
    result = num1 * num2;
  } else if (operator === "/") {
    result = num1 / num2;
  } else {
    console.log("Invalid operator");
  }

  console.log(`${num1} ${operator} ${num2} = ${result}`);
}
