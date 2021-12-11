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
  console.log('this is a fun fact',funFact);

  if(funFact === 'yes' || funFact === 'YES'){
    alert('Really? Me too.');
  }else if (funFact === 'no' || funFact === 'NO'){
    alert('You should go watch it! Beware, the theme song really sticks with you:))');
  }else {
    alert('Remember to answer yes or no.');
  }
}
functionTwo();


let funFactTwo;
function functionThree(){
  funFactTwo = prompt('Is it true that my husband and I were married by the famous folk artist Howard Finster').toLowerCase();
  console.log('second funfact', funFactTwo);

  if(funFactTwo === 'yes' || funFactTwo === 'Yes' || funFactTwo === 'YES' || funFactTwo === 'yeah') {
    alert('You are right');
  }else if (funFactTwo === 'no' || funFactTwo === 'No' || funFactTwo === 'no way'){
    alert('True Stuff!!!');
  }else('You must be curious, just answer yes or no.');
}
functionThree();



let questionFour = prompt('Can you believe I have three daughters and three sons just like on the Brady Bunch?');

if(questionFour === 'no' || questionFour === 'No' || questionFour === 'no way') {
  console.log('You are right!');
  alert('You are right, I have two sons.');
}else if(questionFour === 'yes' || questionFour === 'Yes' || questionFour === 'Yes'){
  alert('Silly!! I have two sons.');
}else('Take a guess, yes or no.');


let questionFive = prompt('True or False, I once waited on Weird Al Yankovich.');

if(questionFive === 'False' || questionFive === 'false'){
  console.log('No it is true.');
  alert('I did! And he was a really nice man.');
}else if(questionFive === 'True'  || questionFive === 'true'){
  alert('You are right! And he was a generous tipper!');
}else('Answer true or false, please.');


alert('Thank you ' + userName + ', for taking the time to have a bit of fun and get to know me.');










