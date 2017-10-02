$(document).ready(function() {

// What do I need?
// When the button is clicked, it becomes not-transparent. Also, the corresponding paragraph is shown.
// Also: When a button is clicked, cause all other buttons to be transparent, and hide all of the pragraphs first to ensure you only ever have 1 paragraph / button active at a time.

// This will make sure that all buttons are greyscale, and then make the selected one colored.
  function removeGrayscale() {
    var clickedButton = $(this);
    $(".image-button").css('filter', 'grayscale(100%)');
    clickedButton.css('filter', 'grayscale(0%)');
  }
  $(".image-button").click(removeGrayscale);

})

// clickedButton.style.filter = "grayscale(0%)";
// var allButtons = clickedButton.siblings();
// for (i = 0; i < allButtons.length; i++) {
//  var selectedButton = allButtons[i];
//  selectedButton.style.filter = "grayscale(0%)";
// }
