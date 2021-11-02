var answer=Number(document.getElementById("number").value);
var answer2=Number(document.getElementById("number2").value);
var answer3=Number(document.getElementById("number3").value);
var answer4=Number(document.getElementById("number4").value);
var answer5=Number(document.getElementById("number5").value);
var answer6=Number(document.getElementById("number6").value);
var answer7=Number(document.getElementById("number7").value);
var answer8=Number(document.getElementById("number8").value);
function calculate_multiplication(){
  var answer=Number(document.getElementById("number").value);
  var answer2=Number(document.getElementById("number2").value);
  var output= answer*answer2; document.getElementById("output1").innerHTML=output;
  window.alert("Hello, your answer will be displayed on the multiplication section after you click or press ok, thanks for using this app :)");
}
function calculate_division(){
  var answer3=Number(document.getElementById("number3").value);
  var answer4=Number(document.getElementById("number4").value);
  var output= answer3/answer4; document.getElementById("output2").innerHTML=output;
  window.alert("Hello, your answer will be displayed on the division section after you click or press ok, thanks for using this app :)");
}
function calculate_add(){
  var answer5=Number(document.getElementById("number5").value);
  var answer6=Number(document.getElementById("number6").value);
  var output= answer5+answer6; document.getElementById("output3").innerHTML=output;
  window.alert("Hello, your answer will be displayed on the addition section after you click or press ok, thanks for using this app :)");
}
function calculate_subtract(){
  var answer7=Number(document.getElementById("number7").value);
  var answer8=Number(document.getElementById("number8").value);
  var output= answer7-answer8; document.getElementById("output4").innerHTML=output;
  window.alert("Hello, your answer will be displayed on the subtraction section after you click or press ok, thanks for using this app :)");
}
function buttonchange1(){
  document.getElementById("multiply").style.color="red";
}
function buttonchange2(){
  document.getElementById("divide").style.color="red";
}
function buttonchange3(){
  document.getElementById("add").style.color="red";
}
function buttonchange4(){
  document.getElementById("subtract").style.color="red";
}