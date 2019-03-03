$(document).ready(function() {
  $("#trivia").hide();
  $("#startGame").on("click", runTime);

  intervalId = setInterval(sixtySeconds, 1000 * 60);
  function runTime() {
    $("#trivia").show();
    var intervalId;
    intervalId = setInterval(decrement, 1000);
    var intervalTime = 60;
  }

  //  The decrement function.
  function decrement() {
    intervalTime--;
    $("#message").text("You have " + intervalTime + " seconds left");
  }
  //startGame click function

  //document ready
});
