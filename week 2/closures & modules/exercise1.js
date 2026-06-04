const StringFormatter = function (){

    const capitalizeFirst = function(str){
        str = str.toLowerCase();
        return (str[0].toUpperCase() + str.substring(1));
    }

    const toSkewerCase = function(str){
        return str.replaceAll(" ","-");
    }
    return {
        capitalizeFirst: capitalizeFirst,
        toSkewerCase: toSkewerCase
    }
}

const formatter = StringFormatter()

console.log(formatter.capitalizeFirst("dorothy")) //should return Dorothy
console.log(formatter.toSkewerCase("blue box")) //should return blue-box
