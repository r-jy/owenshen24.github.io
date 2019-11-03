$(document).ready(function() {
  $("#submit").click(function() {
    window.location.href = SHA256($("#ans").val().toLowerCase()) + ".html";
  });

  $(".arcade").click(function() {
    $('#ans').val($('#ans').val() + $(this).data("val"));
  })
});