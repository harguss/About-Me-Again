'use strict';

console.log('js file connected');

let userName;
function questionOne(){
  userName = prompt('What is your name?').toLowerCase();
  console.log('user input is', userName);
  alert('Hello ' + userName);
}
questionOne();


let funFact;
function functionTwo(){
  funFact = prompt('Did you watch, I dream of Gennie growing up?');
  console.log('this is their fun fact',funFact);

  if(funFact === 'yes' || funFact === 'YES'){
    alert('Cool I did too');
  } else if(funFact === 'no' || funFact === 'NO'){
    alert('You should go watch it');
  } else {
    alert('Remember to answer yes or no.');
  }
}
functionTwo();
