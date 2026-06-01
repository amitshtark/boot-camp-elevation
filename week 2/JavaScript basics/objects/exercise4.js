const date = 3;

const kitchen = {
  owner: "Geraldine",
  hasOven: true,
  fridge: {
    price: 500,
    works: true,
    items: [
      { name: "cheese", expiryDate: 7 },
      { name: "radish", expiryDate: 2 },
      { name: "bread", expiryDate: 1 }
    ]
  }
};

const owner = kitchen.owner;
const hasOven = kitchen.hasOven;
const fridgeWorks = kitchen.fridge.works;
const fridgePrice = kitchen.fridge.price;

const item = kitchen.fridge.items[1]; // radish
const itemName = item.name;
const daysExpired = date - item.expiryDate;
const repairCost = fridgePrice / 2;

let message = `${owner}'s ${itemName} expired ${daysExpired} day ago. `;

if (fridgeWorks) {
  message += `Weird, considering her fridge works. `;
} else {
  message += `Probably because her fridge doesn't work. `;
}

if (hasOven) {
  message += `Luckily, she has an oven to cook the ${itemName} in.`;
} else {
  message += `Too bad she doesn't have an oven to cook the ${itemName} in.`;
}

if (!fridgeWorks) {
  message += ` And she'll have to pay ${repairCost} to fix the fridge.`;
}

console.log(message);