let menu = {
  _courses: {
    appetizers: [],
    mains: [],
    desserts: []
  },
  get courses() {
    return {
      appetizers: this.appetizers, 
      mains: this.mains,
      desserts: this.desserts
    }
  },
  get appetizers() {
    return this._courses.appetizers;
  },
  set appetizers(appetizer) {

  },
  get mains() {
    return this._courses.mains;
  },
  set mains(main) {

  },
  get desserts() {
    return this._courses.desserts;
  },
  set desserts(dessert) {

  },
  addDishToCourse(courseName, dishName, dishPrice) {
    let dish = {
      name: dishName,
      price: dishPrice
    };
    this._courses[courseName].push(dish);
  },
  getRandomDishFromCourse(courseName) {
    let dishes = this._courses[courseName];
    let index = Math.floor(Math.random() * dishes.length);
    return dishes[index];
  },
  generateRandomMeal() {
    //set courses
    let appetizer = this.getRandomDishFromCourse('appetizers');
    let main = this.getRandomDishFromCourse('mains');
    let dessert = this.getRandomDishFromCourse('desserts');

    //Calc Price
    let appPrice = Number(appetizer.price.substring(1));
    let mainPrice = Number(main.price.substring(1));
    let dessPrice = Number(dessert.price.substring(1));
    let finalPrice = '$' + (appPrice + mainPrice + dessPrice);

    return 'Your appetizer is ' + (appetizer.name) + ' ($' + (appPrice) + ')' + ', your main dish is ' + (main.name) + ' ($' + (mainPrice)+ ')' + ', and your dessert is ' + (dessert.name) + ' ($' + (dessPrice)+ ')' + '. The total price for your 3 course meal is ' + (finalPrice) + '.';
  }
};

//Prime the Menu
menu.addDishToCourse('appetizers', 'warm bread', '$2');
menu.addDishToCourse('appetizers', 'mozzarella sticks', '$4');
menu.addDishToCourse('appetizers', 'potato skins', '$6');
menu.addDishToCourse('mains', 'chicken platter', '$10');
menu.addDishToCourse('mains', 'gyro plate', '$8');
menu.addDishToCourse('mains', 'shrimp scampi', '$12');
menu.addDishToCourse('mains', 'hamburger', '$7');
menu.addDishToCourse('desserts', 'cookies', '$1');
menu.addDishToCourse('desserts', 'chocolate cake', '$5');
menu.addDishToCourse('desserts', 'fudge brownie', '$3');

//Test our Getter
let meal = menu.generateRandomMeal();
console.log(meal);