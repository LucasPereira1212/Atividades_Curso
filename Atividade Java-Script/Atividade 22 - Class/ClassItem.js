export default class item {
  constructor(name, description, price, quantityAvailable = 0) {
    this.name = name;
    this.description = description;
    this.price = price;
    this.quantityAvailable = quantityAvailable;
  }

  addToInventory = (quantity) => (this.quantityAvailable += quantity);

  applyOffer = (discount) => {
    const discountInt = (discount / 100) * this.price;
    return this.price - discountInt;
  };
}
