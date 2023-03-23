/* global Product, Cart */

'use strict';

// Set up an empty cart for use on this page.
// state.cart = new Cart([]);
// this.items -> from localStorage
// let items = localStorage.getItem('cart');
// unstringify -> this.items

// TERNARY -> shorthand if else // we are reinstantiating here
// state.cart = localStorage.cart ? new Cart(JSON.parse(localStorage.cart)) : new Cart([]);

if (localStorage.cart) {
  state.cart = new Cart(JSON.parse(localStorage.cart));
  state.cart.updateCounter();
  updateCartPreview();
} else {
  state.cart = new Cart([]);
}

// if (state.cart){
//   state.cart.updateCounter();
//   updateCartPreview();
// }

console.log(state.cart)

// On screen load, we call this method to put all of the product options
// (the things in the state.allProducts array) into the drop down list.
function populateForm() {
  // where our products live
  //TODO: Add an <option> tag inside the form's select for each product
  // our window into DOM - parent element
  const selectElement = document.getElementById('items');
  for (let i in state.allProducts) {
    let optionTag = document.createElement('option');
    optionTag.value = state.allProducts[i].name;
    optionTag.textContent = state.allProducts[i].name;
    selectElement.appendChild(optionTag);
  }
  console.log(selectElement)
}

// When someone submits the form, we need to add the selected item to the cart
// object, save the whole thing back to local storage and update the screen
// so that it shows the # of items in the cart and a quick preview of the cart itself.
function handleSubmit(event) {
  // TODO: Prevent the page from reloading
  event.preventDefault();

  // Do all the things ...
  addSelectedItemToCart();
  state.cart.saveToLocalStorage();
  state.cart.updateCounter();
  // updateCartPreview(state.cart.items[state.cart.items.length - 1]);
  // updateCartPreview(state.cart.items.pop());
  updateCartPreview();

}

// TODO: Add the selected item and quantity to the cart
function addSelectedItemToCart() {
  // TODO: suss out the item picked from the select list
  // how do I return the value of a specific item?
  let item = document.getElementById('items').value;
  // TODO: get the quantity
  let quantity = document.getElementById('quantity').value;
  // TODO: using those, add one item to the Cart
  state.cart.addItem(item, quantity);
  console.log('ALL OF STATE', state.cart);
}

// TODO: As you add items into the cart, show them (item & quantity) in the cart preview div
function updateCartPreview() {
  // console.log('POP ---->', state.cart.items.pop());
  // TODO: Get the item and quantity from the form
  let item = state.cart.items.pop();
  let product = item.product;
  let quantity = item.quantity;
  console.log(product, quantity);

  // TODO: Add a new element to the cartContents div with that information
  let cartContents = document.getElementById('cartContents');
  let listElem = document.createElement('ul');
  cartContents.appendChild(listElem);
  let liElem = document.createElement('li');
  liElem.textContent = `${quantity} ${product}`;
  listElem.appendChild(liElem);

}

// Set up the "submit" event listener on the form.
// This is the trigger for the app. When a user "submits" the form, it will
// Call that handleSubmit method above and kick off the whole process
const catalogForm = document.getElementById('catalog');
catalogForm.addEventListener('submit', handleSubmit);

// Before anything else of value can happen, we need to fill in the select
// drop down list in the form.
populateForm();
