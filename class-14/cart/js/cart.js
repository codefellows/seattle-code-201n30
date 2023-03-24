/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
const table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);

function loadCart() {
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  state.cart = new Cart(cartItems);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
  state.cart.updateCounter();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {
  const tableRows = document.querySelectorAll('#cart tbody tr');
  console.log(tableRows);

  for(let i = 0; i <= tableRows.length; i++){
    if(tableRows[i]){
      tableRows[i].remove();
    }
  }
}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {
  // TODO: Find the table body
  const tbody = document.querySelector('#cart tbody');
  // TODO: Iterate over the items in the cart
  for(let i = 0; i < state.cart.items.length; i++){
    // TODO: Create a TR -> our row
    let tr = document.createElement('tr');
    tr.className = state.cart.items[i].product;
    // TODO: Create a TD for the delete link
    // let deleteLink = document.createElement('button');

    let deleteLink = document.createElement('td');
    // deleteLink.classList.add('deleteButton');
    deleteLink.id = i;
    deleteLink.textContent = 'x';
    tr.appendChild(deleteLink);

    // quantity
    let quantityCell = document.createElement('td');
    quantityCell.textContent = state.cart.items[i].quantity;
    tr.appendChild(quantityCell);

    // item
    let productCell = document.createElement('td');
    productCell.textContent = state.cart.items[i].product;
    tr.appendChild(productCell);
    // TODO: Add the TR to the TBODY and each of the TD's to the TR
    tbody.appendChild(tr);
  }
}

function removeItemFromCart(event) {
  // how might you target possibly an index from your table?
  // how might you assign a class to use? or potentially
  // https://developer.mozilla.org/en-US/docs/Web/API/Node/parentNode
  // https://developer.mozilla.org/en-US/docs/Web/API/Element/classList
  // let deleteButtons = document.querySelectorAll('deleteButton')
  // for(let i = 0; i < deleteButtons.length; i++){
  //   deleteButtons[i].addEventListener('click', state.cart.removeItem);
  // }
  // let targetId = event.target.id;
  // console.log(targetId);
  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  // state.cart.removeItem(targetId);
  // TODO: Save the cart back to local storage
  console.log(event.target.innerHTML);
  console.log(event.target.parentNode.className);
  if(event.target.innerHTML === 'x'){
    let productName = event.target.parentNode.className;
    state.cart.removeItem(productName);
    renderCart();
  }

  // TODO: Re-draw the cart table

}

// This will initialize the page and draw the cart on screen
renderCart();
