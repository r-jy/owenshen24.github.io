$(document).ready(function() {
  $("#submit").click(function() {
    window.location.href = SHA256($("#ans").val().toLowerCase()) + ".html";
  });

  $("img").click(function() {
    $(this).css('border', "solid 5px red");  
  });
});