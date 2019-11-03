$(document).ready(function() {
  $("#submit").click(function() {
    window.location.href = SHA256($("#ans").val().toLowerCase()) + ".html";
  });
});