$(document).ready(function() {

  // Initial selection of Owen Icon to be greyed out.
  $(".initial-desc").show();
  $(".start-icon").css('filter', 'grayscale(100%)');

  let selection = $(".start-icon");

  function selectButton() {
    // Alters the button color filters to show selection
    selection.css('filter', '');
    selection = $(this);
    selection.css('filter', 'grayscale(100%)');

    // Shows the corresponding text box that goes with it
    var clickedButtonIndex = $(this).index();
    $(".desc").hide();
    $(".desc").eq(clickedButtonIndex).show();
  }
  $(".icon").click(selectButton);

  // Show all text if window is resized:
  $(window).resize(function(){
    $(".desc").show();
  });
})


