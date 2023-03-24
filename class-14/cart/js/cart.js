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


function showCart() {

  const tbody = document.querySelector('#cart tbody');

  for(let i = 0; i < state.cart.items.length; i++){
    let tr = document.createElement('tr');

    // >>>>>>> FOR PARENT NODE SOLUTION
    // tr.className = state.cart.items[i].product;
    // let deleteLink = document.createElement('td');
    // deleteLink.classList.add('deleteButton');
    // deleteLink.textContent = 'x';
    // tr.appendChild(deleteLink);

    // >>>>>>> FOR DELETE BUTTON SOLUTION
    let deleteLink = document.createElement('button');
    deleteLink.classList.add('deleteButton');
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

    tbody.appendChild(tr);
  }
}



function removeItemFromCart(event) {

  // >>>>>>> FOR JAYE'S BRILIANT MASTER PLAN
  // let targetId = event.target.id;
  // let deleteButtons = document.querySelectorAll('deleteButton');
  // for(let i = 0; i < deleteButtons.length; i++){
  //   deleteButtons[i].addEventListener('click', removeItemFromCart);
  // }
  // state.cart.removeItem(targetId);
  // renderCart();

  // >>>>>> FOR PARENT NODE SOLUTION
  if(event.target.innerHTML === 'x'){
    let productName = event.target.parentNode.className;
    state.cart.removeItem(productName);
    renderCart();
  }


}

// This will initialize the page and draw the cart on screen
renderCart();
