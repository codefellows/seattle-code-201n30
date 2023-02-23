'use strict';

// >>>>> GLOBAL VARIABLES
// >>>>> WINDOW INTO DOM

const containerElement = document.getElementById('my-calendar');

// >>>>> OBJECT LITERAL

let myCalendar = {
  daysOfWeek: ['', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
  month: 'February',
  weeksInMonth: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
  render: function() {
    const h2Elem = document.createElement('h2');
    h2Elem.textContent = this.month,
    containerElement.appendChild(h2Elem);

    const tableElem = document.createElement('table');
    containerElement.appendChild(tableElem);

    const headerElem = document.createElement('thead');
    tableElem.appendChild(headerElem);

    const trHeaderElem = document.createElement('tr');
    headerElem.appendChild(trHeaderElem);

    for(let i = 0; i < this.daysOfWeek.length; i++){
      const thElem = document.createElement('th');
      thElem.textContent = this.daysOfWeek[i];
      trHeaderElem.appendChild(thElem);
    }

    const tbodyElement = document.createElement('tbody');
    tableElem.appendChild(tbodyElement);

    // const trBodyElement = document.createElement('tr');
    // tbodyElement.appendChild(trBodyElement);

    // for(let i = 0; i < this.daysOfWeek.length; i++){
    //   const tdElem = document.createElement('td');
    //   trBodyElement.appendChild(tdElem);
    // }

    for (let i = 0; i < this.weeksInMonth.length; i++){
      const trBodyElement = document.createElement('tr');
      tbodyElement.appendChild(trBodyElement);

      const rowTdElement = document.createElement('td');
      trBodyElement.appendChild(rowTdElement);
      rowTdElement.textContent = this.weeksInMonth[i];

      for(let i = 0; i < this.daysOfWeek.length; i++){
        const tdElem = document.createElement('td');
        trBodyElement.appendChild(tdElem);
      }
    }

  }
}

myCalendar.render();
