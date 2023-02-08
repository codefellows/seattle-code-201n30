// give us stricter syntax rules
'use strict';

let answer = prompt('Am I original?');
console.log(answer);
console.log(typeof answer);

if (answer === null) {
  alert('Please tell me')
} else if (answer === 'yeah') {
  alert('rock your body now')
} else if (answer === 'no') {
  alert('well, backstreets\'s back, alright?')
} else {
  alert('BACKSTREETS BACK')
}

switch (answer) {
  case null:
    alert('Please tell me');
    break;
  case 'yeah':
    alert('rock your body now');
    break;
  default:
    alert('BACKSTREETS BACK');
}

let likesBoybands = confirm('Do you wish the boyband era never ended?')
console.log(likesBoybands);

if (likesBoybands) {
  alert('SAME')
} else {
  alert('it\'s ok to be wrong')
}
