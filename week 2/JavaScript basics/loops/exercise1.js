const names = ["Ashley", "Donovan", "Lucas"];
const ages = [23, 47, 18];
const people = [];
for(let i=0; i < names.length;i++)
{
    let obj = {name: names[i], age:ages[i]};
    people.push(obj);
}
console.log(people);