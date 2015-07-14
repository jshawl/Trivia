$(document).ready(function(){

//store answer in a var
//create array with question and answer

//if user tries to submit an incomplete, alert will notify
//create var with correct answer
//compare the user's answer to correct answer
//if correct, give user a point
//if wrong, no point
//at the end, give total score

  $("input").on("click", function(){
    alert($(this).val());
  });

  $("#submit").on("click", function(){
    alert("What are you submitting? lol")
  });

  // $("#reset").on("click", function(){
  //   confirm("Are you sure you want to start over?");
  //     if ("ok") {
  //       $("#triviaForm").trigger('reset');
  //     }
  // });

  $("#hello").on("click", function(){
    alert("Hi!");
  });

});
