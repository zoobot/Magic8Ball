// Welcome to magic 8 ball yay
// by Alonzo Alden and Rose Meyers

function clicker() {
  var output;
  var answerArray = ["Yes", "No", "Maybe", "Not a Chance", "Try Harder"];
  var x = document.forms["myForm"]["question"].value;
  (x == null || x == "") ? output = "Please enter question" : output = answerArray[Math.floor((Math.random() * 5) + 1)];
  $('#output').text(output);
  return output;
};