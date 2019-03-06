$(document).ready(function() {
  $("#trivia").hide();
  $("#triviaScore").hide();
  $("#finishGame").hide();
  $("#startGame").on("click", runTime);
  var intervalId;
  var corrans = 0;
  var wrongans = 0;
  var unanswered = 0;

  function runTime() {
    $("#trivia").show();
    $("#startGame").hide();
    $("#finishGame").show();
    intervalId = setInterval(decrement, 1000);
    var intervalTime = 45;
    function decrement() {
      intervalTime--;
      $("#message").text("You have " + intervalTime + " seconds left");
      if (intervalTime === 0) {
        clearInterval(intervalId);
        $("#message").hide();
        showResult();
      }
    }
  }

  $("#finishGame").on("click", function() {
    clearInterval(intervalId);
    showResult();
  });

  function showResult() {
    $("#trivia").hide();
    $("#finishGame").hide();
    $("#triviaScore").show();
    var result = $("input[name=q1]:checked");
    var checkResult;
    checkResult = $("input[name=q1]:checked");
    //console.log(checkResult);
    //console.log(checkResult.length);
    if (checkResult.val() === "2") {
      corrans++;
    } else if (checkResult.length === 0) {
      unanswered++;
    } else {
      wrongans++;
    } // end of Q1
    //console.log(unanswered);

    checkResult = $("input[name=q2]:checked");
    if (checkResult.val() === "3") {
      corrans++;
    } else if (checkResult.length === 0) {
      unanswered++;
    } else {
      wrongans++;
    } // end of Q2

    checkResult = $("input[name=q3]:checked");
    if (checkResult.val() === "1") {
      corrans++;
    } else if (checkResult.length === 0) {
      unanswered++;
    } else {
      wrongans++;
    } // end of Q3

    checkResult = $("input[name=q4]:checked");
    if (checkResult.val() === "2") {
      corrans++;
    } else if (checkResult.length === 0) {
      unanswered++;
    } else {
      wrongans++;
    } // end of Q4

    checkResult = $("input[name=q5]:checked");
    if (checkResult.val() === "4") {
      corrans++;
    } else if (checkResult.length === 0) {
      unanswered++;
    } else {
      wrongans++;
    } // end of Q5

    checkResult = $("input[name=q6]:checked");
    if (checkResult.val() === "1") {
      corrans++;
    } else if (checkResult.length === 0) {
      unanswered++;
    } else {
      wrongans++;
    } // end of Q6

    $("#correctDisplay").text(corrans);
    $("#wrongDisplay").text(wrongans);
    $("#naDisplay").text(unanswered);
    //end of showResult Function
  }
  //document ready
});
