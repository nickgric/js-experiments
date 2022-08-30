const atTheOldToad = {
  potions: [
    { name: "Speed potion", price: 460 },
    { name: "Dragon breath", price: 780 },
    { name: "Stone skin", price: 520 },
  ],
  // Change code below this line
  getPotions() {
    return this.potions;
  },
  addPotion(newPotion) {
    if (this.potions.included(newPotion)) {
    }
    this.potions.push(newPotion);
  },
  // Change code above this line
};

console.log(atTheOldToad.getPotions());
