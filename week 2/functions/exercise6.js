const numLength = function(num)
{
    let temp = num;
    let counter = 0;
    while(temp > 0)
    {
        counter++;
        temp = Math.floor(temp / 10); 
   }
    return counter;
}

const isArmstrongNumber = function(num, length)
{
    let sum = 0;
    let temp = num;
    while(temp > 0)
    {
        sum+=((temp%10)**length);
        temp = Math.floor(temp / 10);
    }
    return sum === num;
};
for(let i = 100; i<1000;i++)
{
    if(isArmstrongNumber(i, numLength(i)))
    {
        console.log(i);
    }
}