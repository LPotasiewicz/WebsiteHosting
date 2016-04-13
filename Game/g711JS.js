//on button press
function submit(){
  //create dice roll
  var numDice = Math.ceil(Math.random() * 6) + Math.ceil(Math.random() * 6);
  //game logic
  if (numDice === 2)
    $(".p1").html("You rolled a " + numDice + ", You lose.");
  else if (numDice === 11 || numDice === 7)
    $(".p1").html("You rolled a " + numDice + ", You Win!");
  else  $(".p1").html("You rolled a " + numDice + ", Nothing happens.");
  $(".p2").html("Wana play again? Press roll.");
};