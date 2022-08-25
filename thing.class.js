/**
 * @class Thing
 * @description   `Thing` is an item that you want to add to your collection (Stuff)
 * @constructor
 * @param name     public  -  String the name of the item (Thing) you want to add to the collection (Stuff)
 * @param status   public  -  String the current status of the Thing [secured, ordered, shipped, other]
 * @param price    private -  Number the price paid for the Thing
 * @param value    public  -  Number the estimated price to purchase the item
 * @param category public  -  String - a category within a collection
 * @param image    public  -  ? file   ?
 *
 */

export const Thing = class {
  constructor(
    name,
    status,
    price,
    value,
    category,
    image,
    notes,
    edition,
    variant,
    link,
    publisher
  ) {
    this.name = name || null;
    this.status = status || null;
    this.price = price || null;
    this.value = value || null;
    this.category = category;
    this.image = image || null;
    this.notes = notes || null;
    this.edition = edition;
    this.variant = variant;
    this.link = link;
    this.publisher = publisher;
    this.id = `id_${Date.now()}`;
  }

  // get name() {
  //   return this.name;
  // }

  // set name(_name) {
  //   this.name = _name
  // }

  grab() {
    return this;
  }
};
