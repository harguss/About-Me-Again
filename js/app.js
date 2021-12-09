'use strict';
console.log('js file connected');

let userName;
function questionOne(){
  userName = prompt('What is your name?').toLowerCase();
  console.log('user input is', userName);
  alert('Hello ' + userName);
}
questionOne();