'use strict';

// State object keeps track of the application state (all available products and current state of the user's cart)
const state = {
  allProducts: [],
  cart: null,
};

let quantityInCart = 0;

// Cart constructor.
const Cart = function(items) {
  // this.items is an array of CartItem instances.
  this.items = items;
};

Cart.prototype.addItem = function(product, quantity) {

  let newItem = new CartItem(product, quantity);
  this.items.push(newItem);
};

Cart.prototype.saveToLocalStorage = function() {

  localStorage.setItem('cart', JSON.stringify(this.items));
};

Cart.prototype.removeItem = function(item) {

  // >>>>>>> FOR PARENT NODE SOLUTION
  // let index = this.items.indexOf(item);
  // this.items.splice(index, 1);

  // >>>>>>>> FOR BUTTON SOLUTION
  this.items.splice(item, 1);

  state.cart.saveToLocalStorage();
};

Cart.prototype.updateCounter = function() {

  // let count = document.getElementById('itemCount');
  // count.textContent = this.items.length;
  // console.log(this.items);

  for(let i = 0; i < this.items.length; i++){
    quantityInCart += +this.items[i].quantity;
  }

  document.getElementById('itemCount').textContent = quantityInCart
}

// somehow tied to my form??
const CartItem = function(product, quantity) {
  this.product = product;
  this.quantity = quantity;
};

// Product contructor.
const Product = function(filePath, name) {
  this.filePath = filePath;
  this.name = name;
};

function generateCatalog() {
  let bag = new Product('assets/bag.jpg', 'Bag');
  let banana = new Product('assets/banana.jpg', 'Banana');
  let bathroom = new Product('assets/bathroom.jpg', 'Bathroom');
  let boots = new Product('assets/boots.jpg', 'Boots');
  let breakfast = new Product('assets/breakfast.jpg', 'Breakfast');
  let bubblegum = new Product('assets/bubblegum.jpg', 'Bubblegum');
  let chair = new Product('assets/chair.jpg', 'Chair');
  let cthulu = new Product('assets/cthulhu.jpg', 'Cthulhu');
  let dogDuck = new Product('assets/dog-duck.jpg', 'Dog-Duck');
  let dragon = new Product('assets/dragon.jpg', 'Dragon');
  let pen = new Product('assets/pen.jpg', 'Pen');
  let petSweep = new Product('assets/pet-sweep.jpg', 'Pet Sweep');
  let scissors = new Product('assets/scissors.jpg', 'Scissors');
  let shark = new Product('assets/shark.jpg', 'Shark');
  let sweep = new Product('assets/sweep.png', 'Sweep');
  let tauntaun = new Product('assets/tauntaun.jpg', 'Taun-Taun');
  let unicorn = new Product('assets/unicorn.jpg', 'Unicorn');
  let waterCan = new Product('assets/water-can.jpg', 'Water Can');
  let wineGlass = new Product('assets/wine-glass.jpg', 'Wine Glass');
  state.allProducts.push(bag, banana, bathroom, boots, breakfast, bubblegum, chair, cthulu, dogDuck, dragon, pen, petSweep, scissors, shark, sweep, tauntaun, unicorn, waterCan, wineGlass);
}

// Initialize the app by creating the big list of products with images and names
generateCatalog();
