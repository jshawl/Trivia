$(document).ready(function(){

//store answer in a var
//create array with question and answer

//if user tries to submit an incomplete, alert will notify
//create var with correct answer
//compare the user's answer to correct answer
//if correct, give user a point
//if wrong, no point
//at the end, give total score
  var score = 0;
  $("input").on("click", function(event){
    // event.preventDefault();
    alert($(this).val());
    if ($(this).val() == "correct"){
      score++
    }
  });

  // keeping track of points
  //   if button with value of correct is selected, add 1 pt



  $("#submit").on("click", function(){
    alert("What are you submitting? lol")
  });

  $("#reset").on("click", function( event ){

    var response = confirm("Are you sure you want to start over?");

    if (response) {
      $("#triviaForm").trigger('reset');
    }
    else {
      event.preventDefault();
      console.log("false")
      score = 0
    }

  });

  $("#hello").on("click", function(){
    alert("Hi!");
  });

});
