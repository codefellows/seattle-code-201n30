'use strict';

// >>>>>>> WINDOW INTO DOM

// let sectionElem = document.getElementById('sales-section')
let salesTable = document.getElementById('sales-table');
// I will need a table body
let tbodyElem = document.createElement('tbody');
salesTable.appendChild(tbodyElem);


// >>>>>>> GLOBAL VARIABLES

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
let allStores = [];

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// I will need a separate render function to render my table header
function renderHeader(){
  // My table will have have a thead to start
  let theadElem = document.createElement('thead');
  salesTable.appendChild(theadElem);
  // This will contain a table row
  let trHeaderElem = document.createElement('tr');
  theadElem.appendChild(trHeaderElem);
  // I need an empty cell to start
  let thFirstCell = document.createElement('th');
  trHeaderElem.appendChild(thFirstCell);
  // Each cell of my table header will contain one of the hours from my array
  for(let i = 0; i < hours.length; i++){
    let thElem = document.createElement('th');
    trHeaderElem.appendChild(thElem);
    thElem.textContent = hours[i];
  }
  // I need a "total" for my last cell
  let thFinalCell = document.createElement('th');
  trHeaderElem.appendChild(thFinalCell);
  thFinalCell.textContent = 'Total';
}

// >>>>>> CONSTRUCTOR FUNCTION

function Store(city, minCust, maxCust, avgCookies) {
  this.city = city;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookies = avgCookies;

  allStores.push(this);
}

// >>>>>> PROTOTYPE METHODS

Store.prototype.generateSales = function () {
  this.cookiesPerHour = [];
  for (let i = 0; i < hours.length; i++) {
    let randomCustomers = randomNumber(this.minCust, this.maxCust);
    this.cookiesPerHour.push(Math.floor(randomCustomers * this.avgCookies));
  }
}

Store.prototype.calculateTotal = function () {
  this.total = 0;
  for (let i = 0; i < this.cookiesPerHour.length; i++) {
    this.total += this.cookiesPerHour[i];
  }
}

Store.prototype.render = function () {

  // Each row will be for each city
  let trBodyElem = document.createElement('tr');
  tbodyElem.appendChild(trBodyElem);

  // The first cell will be the name of my city
  let tdCityElem = document.createElement('td');
  trBodyElem.appendChild(tdCityElem);
  tdCityElem.textContent = this.city;

  // The following cells will correspond with with the hour and contain sales from that hour
  for (let i = 0; i < this.cookiesPerHour.length; i++) {
    let tdSalesElem = document.createElement('td');
    trBodyElem.appendChild(tdSalesElem);
    tdSalesElem.textContent = this.cookiesPerHour[i];
  }

  // My last cell will be the total of for that location's sales
  let tdTotalElem = document.createElement('td');
  trBodyElem.appendChild(tdTotalElem);
  tdTotalElem.textContent = this.total;

}

// I will need a separate render function to render my table footer
function renderFooter(){
  // My table needs a footer
  let tfootElem = document.createElement('tfoot');
  salesTable.appendChild(tfootElem);
  // I will need a row
  let trFooterElem = document.createElement('tr');
  tfootElem.appendChild(trFooterElem);
  // The first cell will say "Totals or something"
  let firstCell = document.createElement('td');
  trFooterElem.appendChild(firstCell);

  let totalsRowArray = [];
  // This footer will add up all of the hourly sales from every location
  // outer loop hours
  // inner loop cities
  for(let i = 0; i < hours.length; i++){
    // we need to reset our counter at each iteration in our outer loop
    let currentTotal = 0;
    for (let j = 0; j < allStores.length; j++){
      currentTotal += allStores[j].cookiesPerHour[i];
    }
    totalsRowArray.push(currentTotal);
    console.log(totalsRowArray);
  }

  let grandTotal = 0;
  for(let i = 0; i < totalsRowArray.length; i++){
    grandTotal += totalsRowArray[i];
    let tdFootElem = document.createElement('td');
    trFooterElem.appendChild(tdFootElem);
    tdFootElem.textContent = totalsRowArray[i];
  }
  // The final cell will be a grand total of all locations daily sales
  let lastCell = document.createElement('td');
  trFooterElem.appendChild(lastCell);
  lastCell.textContent = grandTotal;
}

// >>>>>>>> INVOKE OUR CONSTRUCTOR FUNCTION

// Seattle	23	65	6.3
// Tokyo	3	24	1.2
// Dubai	11	38	3.7
// Paris	20	38	2.3
// Lima	2	16	4.6

let seattle = new Store('Seattle', 23, 65, 6.3);
let tokyo = new Store('Tokyo', 3, 24, 1.2);
let dubai = new Store('Dubai', 11, 38, 3.7);
let paris = new Store('Paris', 20, 38, 2.3);
let lima = new Store('Lima', 2, 16, 4.6);

renderHeader();

// >>>>>>>>> INVOKE OUR METHODS

seattle.generateSales();
seattle.calculateTotal();
seattle.render();

tokyo.generateSales();
tokyo.calculateTotal();
tokyo.render();

dubai.generateSales();
dubai.calculateTotal();
dubai.render();

paris.generateSales();
paris.calculateTotal();
paris.render();

lima.generateSales();
lima.calculateTotal();
lima.render();

console.log(allStores)
console.log(allStores[0].cookiesPerHour[0]);

renderFooter();
