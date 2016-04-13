
//set up varables
var scoreComp = 0;
var scorePlayer = 0;
//animations
$("section").hide();
function show() {
  $("section").show("fast");
  $(".intro").hide("fast");
  $(".p2").html("<pre>Player:" + scorePlayer + "      Computer:" + scoreComp + "</pre>");
};

//when button press
function submit() {
  var player = $('input:checked').val();
  var numComputer = Math.floor((Math.random() * 3));
  var guessList = ["rock", "paper", "scissors"];
  var result = play(player, guessList[numComputer]);
  var answers = {
    tie: "You tie, you both chose " + guessList[numComputer] + ".",
    win: "You win, " + $('input:checked').val() + " beats " + guessList[numComputer] + ".",
    lose: "You lose, " + guessList[numComputer] + " beats " + $('input:checked').val() + ".",
  };
  //print answers to screen
  if (result === "tie") {
    $(".p1").html(answers.tie);
  } else if (result == true) {
    $(".p1").html(answers.win);
    scorePlayer += 1;
  } else if (result == false) {
    $(".p1").html(answers.lose);
    scoreComp += 1;
  }
  //display score
  $(".p2").html("<pre>Player:" + scorePlayer + "      Computer:" + scoreComp + "</pre>");
  if (scorePlayer > scoreComp)
    $(".p3").html("Your doing Great! Have a nick pettit! <img src='https://i.vimeocdn.com/portrait/2947716_300x300.jpg'>");
    else $(".p3").html("୧༼ಠ益ರೃ༽୨Try harder୧༼ಠ益ರೃ༽୨");
};

//logic for win or loss or tie
function play(playerGuess, guess) {
  if (playerGuess === guess)
    return "tie";
  else if (playerGuess === "rock")
    return guess === "scissors";
  else if (playerGuess === "paper")
    return guess === "rock";
  else if (playerGuess === "scissors")
    return guess === "paper";
};