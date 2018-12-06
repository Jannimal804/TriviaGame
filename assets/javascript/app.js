//Trivia Game 
//Psuedo code: 
// Player clicks a start button 
// a random question displays with 4 answers 
// user selects a radio button 
// user can only select one radio button
// and computer determines correct/wrong 
// correct answer displays
// if correct score increases 
// timer runs while window is open 
// alert for timeout 
// alert for score at end of game 

$(document).ready(function() {

    //changes answers 
$('label[for=test1]').html('best option');




var questions = 
[
  {
    question: "What is the capital of United Kingdom?",
    choices: ["Manchester", "Birmingham", "London", "Birmingham"],
    answer: 2
  }]

  //changes q

$("#questions").text(questions[0].question);

});