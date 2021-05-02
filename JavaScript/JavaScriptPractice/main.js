document.getElementById("pTag").style.color = "red";
document.getElementById("pTag").style.fontSize = "larger";

document.getElementById("mybtn").addEventListener("click", myfunction);
function myfunction() {}

function anFunction() {
  ducument.getElementById("abc").innerHTML = "oops";
}

document.getElementById("simpleJavaScript").innerHTML = "Hi I am ashik";
document.getElementById("simpleJavaScript").style.color = "blue";

document.getElementById("image").src = "nature.jpg";

// document.getElementById("clickbtn").addEventListener("click", clickFunction());
function clickFunction() {
  document.getElementById("heading").style.color = "red";
}

function clickFunction(id) {
  // id.innerHTML = "OPPO";
}

function timer() {
  document.getElementById("showTiming").innerHTML = Date();
}

function textUpperCase() {
  var x = document.getElementById("fName");
  x.value = x.value.toUpperCase();
}

function mouseOver(x) {
  x.innerHTML = "Thank You";
}
function mouseOut(x) {
  x.innerHTML = "Welcome";
}

function mDown(obj) {
  obj.style.backgroundColor = "#1ec5e5";
  obj.innerHTML = "Release Me";
}

function mUp(obj) {
  obj.style.backgroundColor = "#D94A38";
  obj.innerHTML = "Thank You";
}

document.getElementById("alert").addEventListener("click", alertFunction);
function alertFunction() {
  alert ("Hi! How are you");
}


document.getElementById("alertBtn").addEventListener("click", function(){
alert("Hello World!");
});

var x = document.getElementById("mouseEffect");
x.addEventListener("mouseover", firstFunction);
x.addEventListener("mouseout", secondFunction);
x.addEventListener("click", thirdFunction);

function firstFunction(){
  document.getElementById("showEffect").innerHTML += "MouseOver<br>";
}

function secondFunction() {
  document.getElementById("showEffect").innerHTML += "MouseOut<br>";
}

function thirdFunction() {
  document.getElementById("showEffect").innerHTML += "Clicked<br>";
}




