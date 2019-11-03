$(document).ready(function() {

  $("#run").click(function() {
    let ans = $("#ans").val();
    if (ans === "{}") {
        alert("🤔");
    }
    if (ans != "{") {
      alert("Error: { expected.");
    }
    else if (ans === "{") {
      alert("Error: } expected.");
    }
  });

  $("#submit").click(function() {
    window.location.href = SHA256($("#ans").val().toLowerCase()) + ".html";
  });
});