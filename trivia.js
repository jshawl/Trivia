$(document).ready(function(){
  var score = 0;
  $(".score").text("Total score: " + score + "/10");
  // or $("#triviaForm ul").length() instead of ten
  // will allow you to easily add more questions

  $("input").on("click", function(event){
    alert($(this).val());
    if ($(this).val() == "correct"){
      score++
      // currently users can keep guessing to add to their score.
      // Can you think of a way to only allow one guess per question?
      // maybe you can use `.off()` with this's siblings
      $(".score").text("Total score: " + score + "/10");
    }
  });

  $("#submit").on("click", function(){
    alert("What are you submitting? lol")
    // cute! :)
  });

  $("#reset").on("click", function( event ){
    var response = confirm("Are you sure you want to start over?");

    if (response) {
      $("#triviaForm").trigger('reset'); // excellent!
    }
    else {
      event.preventDefault();
      console.log("false")
      score = 0
      // would be a nice touch to scroll the page back to the top for the user here.
    }
  });

  $("#hello").on("click", function(){
    alert("Hi!"); //awesome!
  });

});

// Overall
// I am very impressed with your method of adding (in)correct as a value
// in the HTML. This allows you to implement the game functionality with a
// *very* small amount of code. There are a few more things you can do
// to DRY up this code - but honestly great job!!!
