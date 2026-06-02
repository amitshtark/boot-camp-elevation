
const isExist = function(arr, num)
{
    for(let i=0;i< arr.length;i++)
    {
        if(arr[i] === num)
        {
            return true;
        }
    }
    return false;

};
console.log(isExist([10, 9, 8, 7, 6, 5, 4, 3, 2, 1], 2));