const safeJsonParse = function (input) {
    try{
        let output = JSON.parse(input);
        return output;
    }
    catch(err){
        return "Invalid JSON format";
    }
}



console.log(safeJsonParse('{"name": "John"}')); 
// Output: { name: "John" }

console.log(safeJsonParse('invalid json')); 
// Output: "Invalid JSON format"
