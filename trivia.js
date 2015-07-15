$(document).ready(function(){

  var score = 0;
  $(".score").text("Total score: " + score + "/10");

  $("input").on("click", function(event){
    console.log("fired!");
    alert($(this).val());
    if ($(this).val() == "correct"){
      score++
      $(".score").text("Total score: " + score + "/10");
    }
  });

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
