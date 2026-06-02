const isEven = function(num){return num%2==0};

const whoEven = function(arr)
{
    for(let i=0;i< arr.length;i++)
    {
        if(!isEven(arr[i]))
        {
            console.log(arr[i]);
        }
    }
};
console.log(whoEven([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]));