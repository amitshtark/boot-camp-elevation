let year = 2024;
if(year%4 !== 0)
{
  console.log("not leap");
}

else if(year%100 === 0 && year%400 !== 0)
{
  console.log("not leap");
}
else
{
  console.log("leap");

}