const people_info = [
  {
    name: "guido",
    profession: "bungalow builder",
    age: 17,
    country: "canaland",
    city: "sydurn",
    catchphrase: "what a piece of wood!"
  },
  {
    name: "petra",
    profession: "jet plane mechanic",
    age: 31,
    country: "greenmark",
    city: "bostork",
    catchphrase: "that's my engine, bub"
  },
  {
    name: "damian",
    profession: "nursery assistant",
    age: 72,
    country: "zimbia",
    city: "bekyo",
    catchphrase: "with great responsibility comes great power"
  }
];

const capitalize = function(str) {
  return str[0].toUpperCase() + str.slice(1);
};

const getAge = function(age) {
  if (age < 21) {
    return "an Underage";
  } else if (age > 55) {
    return "a 55+";
  } else {
    return `${age} year old`;
  }
};

const capitalizeProfession = function(profession) {
  const words = profession.split(" ");
  let result = "";

  for (let word of words) {
    result += capitalize(word) + " ";
  }

  return result.trim();
};

const getLocation = function(city, country) {
  return `${capitalize(city)}, ${capitalize(country)}`;
};

const capitalizeCatchphrase = function(catchphrase) {
  return `"${capitalize(catchphrase)}"`;
};

const getSummary = function(person) {
  const name = capitalize(person.name);
  const age = getAge(person.age);
  const profession = capitalizeProfession(person.profession);
  const location = getLocation(person.city, person.country);
  const catchphrase = capitalizeCatchphrase(person.catchphrase);

  return `${name} is ${age} ${profession} from ${location}. ${name} loves to say ${catchphrase}.`;
};

for (let person of people_info) {
  console.log(getSummary(person));
}