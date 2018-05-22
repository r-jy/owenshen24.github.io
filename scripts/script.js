$(document).ready(function() {

  // Initial selection of Owen Icon to be greyed out.
  $(".initial-desc").show();
  $(".initial-selection").css('filter', 'grayscale(100%)');

  // Hide the modal
  $(".modal").hide();

  function selectButton() {
    // Alters the button color filters to show selection
    var clickedButton = $(this);
    $(".image-button").css('filter', 'grayscale(0%)');
    clickedButton.css('filter', 'grayscale(100%)');

    // Shows the corresponding text box that goes with it
    var clickedButtonIndex = $(this).index();
    $(".desc-text").hide();
    $(".desc-text").eq(clickedButtonIndex).show();
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

})
