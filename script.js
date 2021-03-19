class Item {
  constructor(name, quantity) {
    this._name = name;
    this._quantity = quantity;
  };

  get name() {
    return this._name;
  };

  get quantity() {
    return this._quantity;
  };
};