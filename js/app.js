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


function functionFour(){
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
  }else if(questionFive === 'True' || questionFive === 'true'){
    alert('You are right! And he was a generous tipper!');
  }else('Answer true or false, please.');
}

functionFour();

function questionSix(){
  let guessNum = 7;
  let chances = 4;

  while(chances > 0){
    chances = chances - 1;

    let userResponse = prompt('How many years did I serve in the MN National Guard?');
    console.log('userResponse is a string ', typeof(userResponse));

    let userNumber =  Number(userResponse);
    // console.log('userResponse is a num ', userNumber, typeof(userNumber));

    if (userNumber > guessNum){
      alert(userName + 'You are too high, keep trying!');
      // break;
    }


    if(userNumber === guessNum){
      alert(userName + ' Well done!');
      chances = 0;
    }


    if(userNumber < guessNum){
      alert(userName + 'you are too low, keep trying!');
    }


  }
  alert('the correct answer is ' + guessNum);
}
questionSix();


function questionSeven() {
  let favoriteFood = ['thai','japanese','italian','middle eastern','indian','vietnamese','chinese'];
  console.log(favoriteFood.length);

  let attempts = 0;
  let correctAnswer = 0;

  while(attempts !== 7){
    let userAnswer = prompt('Guess my top 7 favorite types of food.');
    let userAnswerTrimmedToUpperCase = userAnswer.toLowerCase().trim();
    console.log('userAnswerTrimmedToUpperCase',userAnswerTrimmedToUpperCase);

    if(favoriteFood.indexOf(userAnswerTrimmedToUpperCase) >= 0){
      alert('Yes! ' + userAnswerTrimmedToUpperCase + ' is one of my favorite types of food.');
      correctAnswer = correctAnswer + 1;

    } else {
      alert('Not my favorite, but I like that too!' + userName);
    }

    attempts = attempts + 1;

  }
}

questionSeven();

alert('All of my favorite types of food are: Thai, Japanese, Italian, Middle Eastern, Indian, Vietnamese, Chinese');
alert('You answered ' + correctAnswer + ' out of 7 correctly');


alert('Thank you ' + userName + ', for taking the time to have a bit of fun and get to know me.');












