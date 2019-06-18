$(document).ready(function() {

  // Initial selection of Owen Icon to be greyed out.
  $(".initial-desc").show();
  $(".initial-selection").css('filter', 'grayscale(100%)');

  // Hide the modal
  $(".modal").hide();

  let selection = $(".initial-selection");

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
  $(".image-button").click(selectButton);


  // Show and hide image modals
  function showModal() {
    // On an image click, it opens up a modal:
    var imagePath = $(this).prop('src');
    $(".modal-image").attr("src", imagePath);
    $(".modal").show();
  }
  $(".primer-image").click(showModal);
  $(".death-image").click(showModal);

  function hideModal() {
    $(".modal").hide();
  }
  $(".close").click(hideModal);

  // Show all text if window is resized:
  $(window).resize(function(){
    $(".desc").show();
  });
})
