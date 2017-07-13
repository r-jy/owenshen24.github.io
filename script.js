//Declaring variables

//Buttons
var planbotbutton = document.getElementById('planbotbutton');
var mlubutton = document.getElementById('mlubutton');

//Div Selectors
var mluPar = document.getElementById('mluPar');
var planbotPar = document.getElementById('planbotPar');

//My face
var owen = document.getElementById('owenface')
var title = document.getElementById('nametitle');

//The spinny thing
var spinlogo = document.getElementById('altlogo');

//Functions

//Show MLU
function showMlu () {
  mluPar.style.display='block';
  planbotPar.style.display='none';
}

//Anonymous Combo Function for MLU Button
mlubutton.addEventListener("click", function () {
  showMlu();
  mlubutton.style.filter = "grayscale(0%)";
  planbotbutton.style.filter = "grayscale(100%)";
  title.style.color="rgb(160, 53, 53)";
  spinlogo.style.filter="invert(0%)";
  spinlogo.className='rotating centereditems altlogo';
});

//Show Planbot
function showPlanbot () {
  planbotPar.style.display='block';
  mluPar.style.display='none';
}

//Anonymous Combo Function for Planbot Button
planbotbutton.addEventListener("click", function() {
  showPlanbot();
  planbotbutton.style.filter = "grayscale(0%)";
  mlubutton.style.filter = "grayscale(100%)";
  title.style.color="rgb(38, 154, 183)";
  spinlogo.style.filter="invert(100%)";
  spinlogo.className='rotating centereditems altlogo';
});
