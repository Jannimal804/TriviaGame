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
var allQuestions = 
[
  {
   question: "This '80s menu item came with shrimp, whitefish, and snow crab",
   choices: ["Sea Medley", "Seafood Salad", "Sea Bits", "Fish n' Nachos Deluxe"],
   answer: 1
   },
   {
    question: "What clothing store debuted a Taco Bell inspired line in its stores in 2017?",
    choices: ["H & M", "Kmart", "Forever 21", "Hot Topic"],
    correctAnswer: 2
  }

  ]


//set global variable to track answers
var total_correct_answers = 0;
var total_missed_answers = 0;
var total_questions_submitted = 0;
var currentquestion = 0;
var correctAnswers = 0;


function setupOptions() {
  $('#question').html(parseInt(currentquestion) + 1 + ". " + allQuestions[currentquestion].question);
  var options = allQuestions[currentquestion].choices;
  var formHtml = '';
  for (var i = 0; i < options.length; i++) {
    formHtml += '<div><input type="radio" name="option" value="' + i + '" id="option' + i + '"><label for="option' + i + '">' +
      allQuestions[currentquestion].choices[i] + '</label></div><br/>';
  }
  $('#form').html(formHtml);
  $("#option0").prop('checked', true);
};

function checkAns() {
  if ($("input[name=option]:checked").val() == allQuestions[currentquestion].correctAnswer) {
    correctAnswers++;
  };
};


$(document).ready(function() {

//changes answers 
//$('label[for=test1]').html(allQuestions.length);


//$("#button").on$("click")..... {
//    ... total_correct_answers = total_correct_answers + 1; ..
//};

  //changes q

  //$("#questions").text(question[0].question);

  
//if statement button ID clicked~ array & loop

//onclick functions
setupOptions();

$("#next").click(function() {
  event.preventDefault();
  checkAns();
  currentquestion++;

  });

  if (currentquestion < allQuestions.length) {
    setupOptions();
    if (currentquestion == allQuestions.length - 1) {
      $('#next').html("Submit");
      $('#next').click(function() {
        $(".jumbotron").hide();
        $("#result").html("You correctly answered " + correctAnswers + " out of " + currentquestion + " questions! ").hide();
        $("#result").fadeIn(1500);
      });

    };

  



//timer code 
setTimeout(timeUp, 1000 * 150);

function timeUp() {
  // in the element with an id of time-left add an h2 saying Time's Up!
  // console log done
  console.log("done");
  $("#time-left").append("<h2>Time's Up!</h2>");
  console.log("time is up");

  //  The following line will play the audio file we linked to above:
  alert("Time's Up!");
}

});

// //On April 1, 1996 Taco Bell pranked the country by announcing it had bought this historic treasure
// // Liberty Bell 1. On April 1, 1996 Taco Bell pranked the country by announcing it had bought this historic treasure
//     1.     The Liberty Bell
//     2. What clothing store debuted a Taco Bell inspired line in its stores in 2017?
//         1.     Forever 21
//     3.  Taco Bell is 1 of 3 main parts of Yum Brands. What two other chains are associated with the brand?
//         1.  Pizza Hut
//         2. KFC
//     4. For a brief time in 2009 Taco Bell sold its a Halloween themed menu item with a dyed shell. What was this item called?
//         1.     The Black Jack taco



//look at Slideshow code 