const coffeeShop = {
  money: 50,
  beans: 40,
  beansPrice: 0.2,

  drinkRequirements: {
    latte: { beanRequirement: 10, price: 5 },
    americano: { beanRequirement: 5, price: 2 },
    doubleShot: { beanRequirement: 15, price: 7.5 },
    frenchPress: { beanRequirement: 12, price: 6 }
  },

  buyBeans: function(numBeans) {
    const cost = numBeans * this.beansPrice;
    if (cost <= this.money) {
      this.beans += numBeans;
      this.money -= cost;
    } else {
      console.log("Not enough money to buy beans");
    }
  },

  makeDrink: function(drinkType) {
    const drink = this.drinkRequirements[drinkType];

    if (!drink) {
      console.log("Sorry, we don't make " + drinkType);
      return;
    }

    if (this.beans >= drink.beanRequirement) {
      this.beans -= drink.beanRequirement;
    } else {
      console.log("Sorry, we're all out of beans");
    }
  },

  buyDrink: function(drinkType) {
    const drink = this.drinkRequirements[drinkType];

    if (!drink) {
      console.log("Sorry, we don't make " + drinkType);
      return;
    }

    this.money += drink.price;
    this.makeDrink(drinkType);
  }
};