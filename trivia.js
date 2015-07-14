$(document).ready(function(){

//store answer in a var
//create array with question and answer

//if user tries to submit an incomplete, alert will notify
//create var with correct answer
//compare the user's answer to correct answer
//if correct, give user a point
//if wrong, no point
//at the end, give total score

//if value="correct" clicked, alert("correct!")
  // function correct(){
  //   $("input[value='correct']".click(function(){
  //     if ($(this).is('checked')) {
  //       alert("Correct!");
  //     }
  //   }))
  // };

  //when choice is selected, alert input value
  // $("#triviaForm input").on("click", function() {
  //   var value = ('input[type="radio"]:checked').val();
  //   alert(value);
  // });

  // function alertRadioValue() {
  //   var radioValue = $('input[name="q1"]:checked').val();
  //   alert("radioValue");
  // }

  function alertRadioValue() {
    var radioValue = $('input.answer:checked').val();
    alert(radioValue);
  }


  function CheckQs (){
    var qs = $("input:radio[name=q1]");
    var noOfRadios = qs.length;

    for (var i=0; i < noOfRadios; i++){
      if (qs[i].checked){
        if(qs[i].value == "correct"){
          alert("Correct!");
        }else {
          alert("Incorrect")
        }
      }
    }
  }
$("input").on("click", function(){
  alert($(this).val());
});

  $("#reset").on("click", function(){
    confirm("Are you sure you want to start over?");
      if ("ok") {
        //clear clicked on radio buttons
      }
  });



  $("#hello").on("click", function(){
    alert("Hi!");
  });

});
