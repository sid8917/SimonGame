var gamePattern = [];
var buttonColours = ["red", "blue", "green", "yellow"];
var userClickedPattern=[];
function nextSequence(level) {
  level++;
  $("h1").text("LEVEL "+level);
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChosenColour);
}
$(".btn").click(function(){
  var userChosenColour = this.id;
  userClickedPattern.push(userChosenColour);

  playSound(userChosenColour);
  animatePress(userChosenColour);
});
function playSound(name){
  var audio = new Audio("sounds/" +name+ ".mp3");
  audio.play();
}
function animatePress(currentColour){
  $("#"+currentColour).addClass("pressed");
  setTimeout(function(){
    $("#"+currentColour).removeClass("pressed");
  },100);
  }
  var count=0;
  var level=0;
  while(count++==0){
  $(document).keypress(function(){

nextSequence(level);

  });}
